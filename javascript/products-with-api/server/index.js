const data = require("./fake-data");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const { products } = data;
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome our api!");
});
app.get("/api", (req, res) => {
  const apiInfoObj = [
    {
      method: "GET",
      path: "/api/products",
      queryParams: [
        {
          page: "required",
          size: "optional (default 5)",
          searchStr: "optional",
          category: "optional",
        },
      ],
    },
    {
      method: "GET",
      path: "/api/products/:id",
      urlParams: [
        {
          id: "required url parametr",
        },
      ],
      bodyParams: [],
    },
    {
      method: "POST",
      path: "/api/products",
      urlParams: [],
      bodyParams: [
        { name: "required" },
        { price: "required" },
        { category: "required" },
        { inStock: "required" },
        { imgUrl: "required" },
      ],
    },
    {
      method: "PUT",
      path: "/api/products/:id",
      urlParams: [
        {
          id: "required url parametr",
        },
      ],
      bodyParams: [
        { name: "optional" },
        { price: "optional" },
        { category: "optional" },
        { inStock: "optional" },
        { imgUrl: "optional" },
      ],
    },
    {
      method: "DELETE",
      path: "/api/products/:id",
      urlParams: [
        {
          id: "required url parametr",
        },
      ],
      bodyParams: [],
    },
  ];

  res.json(apiInfoObj);
});

app.get("/api/products", (req, res) => {
  let { searchStr, category, size, page } = req.query;

  if (!page) {
    return res.status(400).json({ error: "page is required!" });
  }
  if (!size) {
    size = 5;
  }

  const filteredProducts = products
    .filter((p) =>
      searchStr
        ? p.name
            .toLowerCase()
            .trim()
            .includes(searchStr.toLowerCase().trim()) ||
          p.category
            .toLowerCase()
            .trim()
            .includes(searchStr.toLowerCase().trim())
        : true
    )
    .filter((p) => (category ? p.category === category : true));

  const startIndex = (page - 1) * size;
  const endIndex = page * size;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.status(200).json({
    products: paginatedProducts,
    total: filteredProducts.length,
    totalPage: Math.ceil(filteredProducts.length / size),
    page: parseInt(page),
    size: parseInt(size),
  });
});

app.get("/api/products/:id", (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "product id is required!" });
    }

    const product = products.find((product) => product.id == id);
    if (!product) {
      return res
        .status(404)
        .json({ error: `Product not found with id: ${id}` });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error! ${error}` });
  }
});

app.post("/api/products", (req, res) => {
  try {
    const { name, price, category, inStock, imageUrl } = req.body;
    if (!name || !price || !category || !inStock || !imageUrl) {
      return res.status(400).json({
        error: "Name, price, category, inStock, imageUrl fields are required!",
      });
    }

    const product = {
      id: uuidv4(),
      name,
      price,
      category,
      inStock,
      imageUrl,
    };
    products.push(product);

    setTimeout(() => {
      res.status(201).json(product);
    }, 5000);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error! ${error}` });
  }
});

app.put("/api/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Product id is required!" });
    }

    const productIdx = products.findIndex((product) => product.id == id);
    if (productIdx === -1) {
      return res
        .status(404)
        .json({ error: `Product not found with id: ${id}` });
    }

    const updatedProduct = products[productIdx];

    ["name", "price", "category", "inStock", "imageUrl"].forEach((key) => {
      if (req.body[key]) {
        updatedProduct[key] = req.body[key];
      }
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error! ${error}` });
  }
});

app.delete("/api/products/:id", (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Product id is required!" });
    }

    const productIdx = products.findIndex((product) => product.id == id);
    if (productIdx === -1) {
      return res
        .status(404)
        .json({ error: `Product not found with id: ${id}` });
    }
    const deletedProduct = products.splice(productIdx, 1)[0];
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: `Internal Server Error! ${error}` });
  }
});

app.listen(port, () => {
  console.log(`NFT Marketplace server app listening on port ${port}`);
});
