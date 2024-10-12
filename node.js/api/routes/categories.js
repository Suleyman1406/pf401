const { Router } = require("express");

const validateSchema = require("../middlewares/validator");
const { categorySchema } = require("../validation/schemas/category");
const Category = require("../mongoose/models/category");
const { mapDbCategory } = require("../utils");

const router = Router();

router.get("/", async (req, res) => {
  const { include } = req.query;
  const selectArr = ["title", "description"];
  if (include === "products") {
    selectArr.push("products");
  }
  const categories = await Category.find().select(selectArr);
  res.json(categories.map(mapDbCategory));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).send("Category not found");
  }

  res.json(mapDbCategory(category));
});

router.post("/", validateSchema(categorySchema), async (req, res) => {
  try {
    const { title, description } = req.body;

    const categoryModel = new Category({
      description,
      title,
    });

    let category = await categoryModel.save();

    res.status(201).json(mapDbCategory(category));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", validateSchema(categorySchema), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const categoryData = {
      title,
      description,
    };

    const category = await Category.findByIdAndUpdate(id, categoryData, {
      new: true,
    });

    if (!category) {
      return res.status(404).send("Category not found");
    }

    res.json(mapDbCategory(category));
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({
      errorMessage: "Category not found",
    });
  }

  if (category.products.length > 0) {
    return res.status(400).json({
      errorMessage: "Category has products",
    });
  }

  await category.deleteOne();

  return res.json(mapDbCategory(category));
});

module.exports = router;
