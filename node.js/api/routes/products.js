const products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const { category, search, sort, skip = 0, take = 10 } = req.query;

  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }
  if (search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (sort) {
    const [key, order] = sort.split("-");
    filteredProducts.sort((a, b) => {
      if (order === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
  }

  const hasMore = +skip + +take < filteredProducts.length;
  const total = filteredProducts.length;
  const pageSize = take;
  filteredProducts = filteredProducts.slice(+skip, +skip + +take);

  const data = {
    hasMore,
    pageSize,
    total,
    items: filteredProducts,
  };

  res.json(data);
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.json(product);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { title, description, price, category } = req.body;
  if (!title || !description || !price || !category) {
    return res.status(400).send("Missing required fields");
  }

  const newProduct = {
    id: uuidv4(),
    title,
    description,
    price,
    category,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, price, category } = req.body;

  if (!title || !description || !price || !category) {
    return res.status(400).send("Missing required fields");
  }

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  product.title = title;
  product.description = description;
  product.price = price;
  product.category = category;

  res.json(product);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const productIdx = products.findIndex((product) => product.id === id);

  if (productIdx === -1) {
    return res.status(404).send("Product not found");
  }

  const deletedProduct = products.splice(productIdx, 1);

  return res.json(deletedProduct[0]);
});

module.exports = router;
