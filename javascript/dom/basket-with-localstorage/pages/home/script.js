const productContainerElement = document.querySelector(".product-container");
const cartItemsCountElement = document.querySelector("#cart-item-count");

products.forEach(createProductElement);

function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.className = "product";

  const productImg = document.createElement("img");
  productImg.src = product.img;
  const productTitle = document.createElement("h3");
  productTitle.textContent = product.title;
  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;

  const productFooter = document.createElement("div");
  const priceElement = document.createElement("span");
  priceElement.textContent = product.price + " $    ";
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add To Cart";
  productFooter.append(priceElement, addToCartBtn);

  addToCartBtn.addEventListener("click", () => addToCart(product));

  const detailButton = document.createElement("a");
  detailButton.textContent = "Detail";
  detailButton.href = `../product-detail/index.html?id=${product.id}`;

  productFooter.append(priceElement, addToCartBtn, detailButton);

  productElement.append(
    productImg,
    productTitle,
    productDescription,
    productFooter
  );

  productContainerElement.append(productElement);
}

// Basic
// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
//   cart.push(product);
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// Advanced
function addToCart(product) {
  let cart = getCart();

  const cartItem = cart.find((item) => item.product.id === product.id);
  if (cartItem) {
    cartItem.count++;
  } else {
    cart.push({ product, count: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  countCartItems();
}

function countCartItems() {
  const cart = getCart();
  const count = cart.reduce((prev, val) => prev + val.count, 0);
  cartItemsCountElement.textContent = count;
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) ?? [];
}

countCartItems();
