const { BASE_URL } = require("../constants");

function mapDbProduct(product) {
  product = product.toObject();
  delete product.__v;
  product.id = product._id;
  delete product._id;
  product.image = `${BASE_URL}/${product.imagePath}`;
  delete product.imagePath;
  return product;
}

function mapDbCategory(category) {
  category = category.toObject();
  delete category.__v;
  category.id = category._id;
  delete category._id;
  return category;
}

module.exports = {
  mapDbProduct,
  mapDbCategory,
};
