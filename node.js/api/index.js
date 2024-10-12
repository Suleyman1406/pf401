const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/categories");
const { PORT } = require("./constants");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Products app listening on PORT ${PORT}`);
});

mongoose
  .connect("")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("error", err);
  });
