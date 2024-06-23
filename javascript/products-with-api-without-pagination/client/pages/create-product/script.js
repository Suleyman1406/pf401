const productCreateForm = document.querySelector(".product-create-form");
const productNameInput = productCreateForm.querySelector(".product-name");
const productPriceInput = productCreateForm.querySelector(".product-price");
const productCategoryInput =
  productCreateForm.querySelector(".product-category");
const productImgUrlInput = productCreateForm.querySelector(".product-img-url");
const productInStockCheckbox =
  productCreateForm.querySelector("#product-in-stock");
const productCreateButton = productCreateForm.querySelector("button");

productCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = productNameInput.value;
  const price = productPriceInput.value;
  const category = productCategoryInput.value;
  const imageUrl = productImgUrlInput.value;
  const inStock = productInStockCheckbox.checked;

  if (!name || !price || !category || !imageUrl) {
    createToast("Name, price, category, imageUrl are required!", "error");
    return;
  }

  const product = {
    name,
    price,
    category,
    imageUrl,
    inStock,
  };

  createProduct(product);
});

async function createProduct(product) {
  productCreateButton.classList.add("loading");
  productCreateButton.disabled = true;
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  productCreateButton.classList.remove("loading");
  productCreateButton.disabled = false;
  if (response.status !== 201) {
    createToast(data.error, "error");
    return;
  }

  createToast("Product successfully created", "success");
  resetFields();
}

function resetFields() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productImgUrlInput.value = "";
  productInStockCheckbox.checked = false;
}

function createToast(text, type) {
  Toastify({
    text,
    duration: 1000,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: type === "success" ? "green" : "red",
      color: "white",
    },
  }).showToast();
}
