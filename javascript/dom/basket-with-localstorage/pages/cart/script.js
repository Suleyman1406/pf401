const productContainerElement = document.querySelector(".product-container");

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) ?? [];
}
function setCart(cart) {
  return localStorage.setItem("cart", JSON.stringify(cart));
}

function fillCartItems() {
  const cart = getCart();

  cart.forEach((item, idx) => {
    const productElement = document.createElement("div");
    productElement.className = "product";

    const productImg = document.createElement("img");
    productImg.src = item.product.img;
    const productTitle = document.createElement("h3");
    productTitle.textContent = item.product.title;
    const productDescription = document.createElement("p");
    productDescription.textContent = item.product.description;

    const priceElement = document.createElement("span");
    priceElement.textContent = item.product.price + " $    ";

    const productFooter = document.createElement("div");
    const decreaseCountBtn = document.createElement("button");
    decreaseCountBtn.textContent = "-";
    const increaseCountBtn = document.createElement("button");
    increaseCountBtn.textContent = "+";
    const countElement = document.createElement("span");
    countElement.textContent = item.count;

    increaseCountBtn.addEventListener("click", () => {
      const newCount = +countElement.textContent + 1;
      countElement.textContent = newCount;
      item.count = newCount;
      setCart(cart);
    });
    decreaseCountBtn.addEventListener("click", () => {
      const newCount = +countElement.textContent - 1;
      if (newCount === 0) {
        if (!confirm("Are you sure to remove product from your cart?")) return;
        productElement.remove();
        cart.splice(idx, 1);
        setCart(cart);
        return;
      }
      countElement.textContent = newCount;
      item.count = newCount;
      setCart(cart);
    });

    productFooter.append(decreaseCountBtn, countElement, increaseCountBtn);
    productElement.append(
      productImg,
      productTitle,
      productDescription,
      priceElement,
      productFooter
    );
    productContainerElement.append(productElement);
  });
}
fillCartItems();
