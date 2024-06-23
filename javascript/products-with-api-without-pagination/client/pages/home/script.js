const productTableBody = document.querySelector(".products-table-body");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal-container .modal");

const productEditForm = document.querySelector(".modal .product-edit-form");
const productNameInput = productEditForm.querySelector(".product-name");
const productPriceInput = productEditForm.querySelector(".product-price");
const productCategoryInput = productEditForm.querySelector(".product-category");
const productImgUrlInput = productEditForm.querySelector(".product-img-url");
const productInStockCheckbox =
  productEditForm.querySelector("#product-in-stock");
const productEditButton = productEditForm.querySelector("button");
let editedProduct = null;

async function getProductsFromApi() {
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json();

  return products;
}

async function fillTableWithProducts() {
  const products = await getProductsFromApi();
  products.forEach((product) => createProductRow(product));
}

function createProductRow(product) {
  const productRow = document.createElement("tr");
  const productStatusCeil = document.createElement("td");
  const productStatusDivElement = document.createElement("div");
  productStatusDivElement.className = product.inStock
    ? "status inStock"
    : "status";
  productStatusCeil.append(productStatusDivElement);
  const productIdCeil = document.createElement("td");
  productIdCeil.className = "id";
  productIdCeil.textContent = product.id;
  const productImgCeil = document.createElement("td");
  productImgCeil.innerHTML = `<img src="${product.imageUrl}" alt="">`;
  const productNameCeil = document.createElement("td");
  productNameCeil.className = "name";
  productNameCeil.textContent = product.name;
  const productPriceCeil = document.createElement("td");
  productPriceCeil.textContent = product.price + "$";
  const productCategoryCeil = document.createElement("td");
  productCategoryCeil.textContent = product.category;
  const productOperationsCeil = document.createElement("td");
  const productDetailBtn = document.createElement("button");
  productDetailBtn.textContent = "detail";
  const productDeleteBtn = document.createElement("button");
  productDeleteBtn.textContent = "delete";
  const productEditBtn = document.createElement("button");
  productEditBtn.textContent = "edit";
  productOperationsCeil.append(
    productDetailBtn,
    productDeleteBtn,
    productEditBtn
  );
  productDeleteBtn.addEventListener("click", () =>
    onProductDelete(product.id).then((isDeleted) => {
      if (isDeleted) {
        productRow.remove();
      }
    })
  );
  productEditBtn.addEventListener("click", () => {
    editedProduct = product;
    onModalOpen();
  });

  productDetailBtn.addEventListener("click", () => {
    window.open(`../product-detail/index.html?id=${product.id}`, "_self");
  });

  productRow.append(
    productStatusCeil,
    productIdCeil,
    productImgCeil,
    productNameCeil,
    productPriceCeil,
    productCategoryCeil,
    productOperationsCeil
  );
  productTableBody.append(productRow);
}

async function onProductDelete(productId) {
  if (!confirm("Are you sure to delete product with id - " + productId))
    return false;
  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: "DELETE",
  });

  return response.status === 200;
}

function onModalClose() {
  modalContainer.classList.remove("open");
  editedProduct = null;
}
function onModalOpen() {
  modalContainer.classList.add("open");
  fillEditModalFields();
}

function fillEditModalFields() {
  productNameInput.value = editedProduct.name;
  productPriceInput.value = editedProduct.price;
  productCategoryInput.value = editedProduct.category;
  productImgUrlInput.value = editedProduct.imageUrl;
  productInStockCheckbox.checked = editedProduct.inStock;
}

productEditForm.addEventListener("submit", (e) => {
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
  const editedProduct = {
    name,
    price,
    category,
    imageUrl,
    inStock,
  };
  editProduct(editedProduct);
});

async function editProduct(product) {
  const response = await fetch(`${BASE_URL}/products/${editedProduct.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  if (response.status !== 200) {
    return createToast(data.error, "error");
  }
  onModalClose();
  changeEditedRow(data);
}

function changeEditedRow(product) {
  const editedRow = Array.from(productTableBody.children).find(
    (tr) => tr.querySelector(".id").textContent == product.id
  );
  editedRow.children[2].firstElementChild.src = product.imageUrl;
  editedRow.querySelector(".name").textContent = product.name;
  editedRow.children[4].textContent = product.price;
  editedRow.children[5].textContent = product.category;
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

modalContainer.addEventListener("click", () => {
  onModalClose();
});
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

fillTableWithProducts();
