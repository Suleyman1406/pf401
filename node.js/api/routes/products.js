const { Router } = require("express");

const validateSchema = require("../middlewares/validator");
const upload = require("../middlewares/multer");
const {
  productListSchema,
  productCreateSchema,
  productEditSchema,
} = require("../validation/schemas/product");
const Product = require("../mongoose/models/product");
const Category = require("../mongoose/models/category");
const { mapDbProduct } = require("../utils");

const router = Router();

router.get("/", validateSchema(productListSchema), async (req, res) => {
  const { category, search, sort, skip = 0, take = 10 } = req.query;

  const query = {};
  const sortObj = {};

  if (category) {
    query.category = {
      $regex: category,
      $options: "i",
    };
  }

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }
  if (sort) {
    const [key, order] = sort.split("-");
    sortObj[key] = order === "asc" ? 1 : -1;
  }

  const products = await Product.find(query)
    .limit(+take)
    .skip(+skip)
    .sort(sortObj)
    .populate("category", ["title", "description"]);
  const total = await Product.countDocuments(query);
  const hasMore = +skip + +take < total;

  const data = {
    hasMore,
    pageSize: +take,
    total,
    items: products.map(mapDbProduct),
  };

  res.json(data);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.json(mapDbProduct(product));
});

router.post(
  "/",
  upload.single("image"),
  validateSchema(productCreateSchema),
  async (req, res) => {
    try {
      const { title, description, price, category: categoryId } = req.body;

      const category = await Category.findById(categoryId);

      if (!category) {
        return res.status(400).json({
          errorMessage: "Category not found",
        });
      }

      const productModel = new Product({
        title,
        description,
        price,
        category: categoryId,
        imagePath: req.file.path,
      });

      let product = await productModel.save();

      category.products.push(product._id);
      await category.save();

      product = mapDbProduct(product);

      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.put(
  "/:id",
  upload.single("image"),
  validateSchema(productEditSchema),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, price, category } = req.body;

      const productData = {
        title,
        description,
        price,
        category,
      };
      if (req.file) {
        productData.imagePath = req.file.path;
      }

      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).send("Product not found");
      }

      if (product.category.toString() !== category) {
        const oldCategoryPromise = Category.findByIdAndUpdate(
          product.category,
          {
            $pull: { products: id },
          }
        );
        const newCategoryPromise = Category.findByIdAndUpdate(category, {
          $push: { products: id },
        });

        await Promise.all([oldCategoryPromise, newCategoryPromise]);
      }
      await product.updateOne(productData, {
        new: true,
      });
      res.json(mapDbProduct(product));
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }

    // const product = products.find((product) => product.id === id);

    // if (!product) {
    //   return res.status(404).send("Product not found");
    // }

    // product.title = title;
    // product.description = description;
    // product.price = price;
    // product.category = category;
    // if (req.file) {
    //   product.image = req.file.path;
    // }

    // res.json({
    //   ...product,
    //   image: `${BASE_URL}/${product.image}`,
    // });
  }
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res.status(404).send("Product not found");
  }
  const category = await Category.findById(product.category);
  if (category) {
    category.products = category.products.filter((p) => p.toString() !== id);
    await category.save();
  }

  return res.json(mapDbProduct(product));
});

module.exports = router;
