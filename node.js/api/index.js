const productRoutes = require("./routes/products");
const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
