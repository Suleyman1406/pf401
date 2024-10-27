import { Router } from "express";

import Comment from "../mongoose/schemas/comment.mjs";
import { authorize } from "../middlewares/user.mjs";
import validateSchema from "../middlewares/validator.mjs";
import { postCommentSchema } from "../validation/post.mjs";

const commentRouter = Router();

commentRouter.get("/", async (req, res) => {
  try {
    const comments = await Comment.find({
      post: req.postId,
    }).populate("author", "name surname");

    res.json({
      comments,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
commentRouter.post(
  "/",
  authorize,
  validateSchema(postCommentSchema),
  async (req, res) => {
    try {
      const { content } = req.body;

      const comment = new Comment({
        content,
        post: req.postId,
        author: req.user._id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await comment.save();

      res.json({
        message: "Comment created successfully",
        comment,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);
commentRouter.put(
  "/:id",
  authorize,
  validateSchema(postCommentSchema),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { content } = req.body;

      const comment = await Comment.findById(id);

      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }
      if (comment.author.toString() !== req.user._id.toString()) {
        return res
          .status(401)
          .json({ message: "You are not authorized to update this comment" });
      }

      comment.content = content;
      comment.updatedAt = new Date();
      await comment.save();

      res.json({
        message: "Comment edited successfully",
        comment,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);
commentRouter.delete("/:id", authorize, async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findById(id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    if (comment.author.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ message: "You are not authorized to update this comment" });
    }

    await comment.deleteOne();

    res.json({
      message: "Comment deleted successfully",
      comment,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default commentRouter;
