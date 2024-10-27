import { Router } from "express";
import Post from "../mongoose/schemas/post.mjs";
import upload from "../middlewares/multer.mjs";
import { authorize } from "../middlewares/user.mjs";
import validateSchema from "../middlewares/validator.mjs";
import { postCreateSchema, postEditSchema } from "../validation/post.mjs";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 5);

    const posts = await Post.find()
      .populate("author", "name email surname")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    posts.forEach((post) => {
      post.image = `http://localhost:3000/${post.image}`;
    });
    const total = await Post.countDocuments();
    res.json({
      total,
      page,
      limit,
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

postRouter.post(
  "/",
  authorize,
  upload.single("image"),
  validateSchema(postCreateSchema),
  async (req, res) => {
    try {
      const { content, tags } = req.body;
      const file = req.file;

      const post = new Post({
        content,
        tags: tags?.split(",") ?? [],
        image: file.path,
        author: req.user._id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await post.save();

      res.json({
        message: "Post created successfully",
        post,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

postRouter.put(
  "/:id",
  authorize,
  upload.single("image"),
  validateSchema(postEditSchema),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { content, tags } = req.body;
      const file = req.file;

      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      if (post.author.toString() !== req.user._id.toString()) {
        return res
          .status(403)
          .json({ message: "You are not allowed to edit this post" });
      }

      post.content = content;
      post.tags = tags?.split(",") ?? post.tags;
      post.image = file?.path ?? post.image;
      post.updatedAt = new Date();
      await post.save();

      res.json({
        message: "Post edited successfully",
        post,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

postRouter.delete("/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "You are not allowed to edit this post" });
    }

    await post.deleteOne();

    res.json({
      message: "Post deleted successfully",
      post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

postRouter.post("/:id/like", authorize, async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    let liked = true;
    if (post.likes.includes(req.user._id)) {
      post.likes = post.likes.filter(
        (like) => like.toString() !== req.user._id.toString()
      );
      liked = false;
    } else {
      post.likes.push(req.user._id);
    }
    await post.save();

    res.json({
      likes: post.likes,
      message: `Post ${liked ? "liked" : "unliked"} successfully`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default postRouter;
