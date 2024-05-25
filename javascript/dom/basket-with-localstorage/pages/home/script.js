const productContainerElement = document.querySelector(".product-container");

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
  let cart = JSON.parse(localStorage.getItem("cart")) ?? [];

  const cartItem = cart.find((item) => item.product.id === product.id);
  if (cartItem) {
    cartItem.count++;
  } else {
    cart.push({ product, count: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// [
//   {
//     id: 1,
//     title: "Smartphone",
//     img: "https://www.zdnet.com/a/img/resize/9c4c6a4546bf9e283e63548c45f588360ce02607/2023/10/05/487a7516-8c27-4547-9dd5-e78f40e8d112/google-pixel-8-pro-screen.jpg?auto=webp&fit=crop&height=900&width=1200",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
// ];

// [
//   {
//     product: {
//       id: 1,
//       title: "Smartphone",
//       img: "https://www.zdnet.com/a/img/resize/9c4c6a4546bf9e283e63548c45f588360ce02607/2023/10/05/487a7516-8c27-4547-9dd5-e78f40e8d112/google-pixel-8-pro-screen.jpg?auto=webp&fit=crop&height=900&width=1200",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     count: 7
//   },
// ];
