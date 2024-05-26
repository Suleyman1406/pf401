const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("id");

if (!productId) {
  alert("Product Not found!");
  window.location.href = "../home/index.html";
}

const product = products.find((p) => p.id == productId);

if (!product) {
  alert("Product Not found!");
  window.location.href = "../home/index.html";
}

const title = document.querySelector("h1");
const img = document.querySelector("img");
const description = document.querySelector("p");
const price = document.querySelector("p ~ p");

title.textContent = product.title;
img.src = product.img;
description.textContent = product.description;
price.textContent = product.price;
