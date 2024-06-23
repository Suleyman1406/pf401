const loadingOverlayElement = document.querySelector("#loading-overlay");
const productImgElement = document.querySelector(".product-info .img");
const productNameElement = document.querySelector(".product-info .name");
const productPriceElement = document.querySelector(".product-info .price");
const productCategoryElement = document.querySelector(
  ".product-info .category"
);

const searchParamsStr = window.location.search;
const searchParam = new URLSearchParams(searchParamsStr);
const id = searchParam.get("id");

if (!id) {
  window.open("../home/index.html", "_self");
}

async function getProductFromApi(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  if (response.status !== 200) {
    return window.open("../home/index.html", "_self");
  }
  const product = await response.json();
  loadingOverlayElement.classList.remove("open");
  return product;
}

async function fillProductData(id) {
  const product = await getProductFromApi(id);
  productImgElement.src = product.imageUrl;
  productNameElement.textContent = product.name;
  productPriceElement.textContent = product.price;
  productCategoryElement.textContent = product.category;
}

fillProductData(id);
