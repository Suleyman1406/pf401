const productTableBodyElement = document.querySelector(".products-table-body");
const productsLoadMoreBtn = document.getElementById("load-more-btn");
const modalContainerElement = document.querySelector(".modal-container");
const editForm = document.querySelector(".product-edit-form");
let paginationData = null;

async function getProductsData(page, size, searchStr, category) {
  // let urlParams = `?page=${page}`;
  // if (size) {
  //   urlParams += `&size=${size}`;
  // }
  // if (searchStr) {
  //   urlParams += `&searchStr=${searchStr}`;
  // }
  // if (category) {
  //   urlParams += `&category=${category}`;
  // }
  const searchParams = new URLSearchParams();
  searchParams.append("page", page);
  if (size) searchParams.append("size", size);
  if (searchStr) searchParams.append("searchStr", searchStr);
  if (category) searchParams.append("category", category);

  const response = await fetch(`${BASE_URL}/products?${searchParams}`);
  const data = await response.json();
  productsLoadMoreBtn.style.display =
    data.page < data.totalPage ? "block" : "none";
  paginationData = {
    ...data,
  };
  delete paginationData.products;
  return data;
}

/*

<tr>
  <td><div class="status inStock"></div></td>
  <td class="id">1</td>
  <td>
    <img
      src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
      alt=""
    />
  </td>
  <td class="name">Laptop</td>
  <td>999.99$</td>
  <td>Electronics</td>
  <td>
    <button>detail</button><button>delete</button><button>edit</button>
  </td>
</tr> 

*/

async function fillTable(products) {
  products.forEach((product) => {
    const productRowElement = document.createElement("tr");
    productRowElement.innerHTML = `
      <td><div class="status ${product.inStock ? "inStock" : ""} "></div></td>
      <td class="id">${product.id}</td>
      <td>
        <img
          src="${product.imageUrl}"
          alt=""
        />
      </td>
      <td class="name">${product.name}</td>
      <td>${product.price}$</td>
      <td>${product.category}</td>
    `;
    const productActionsWrapperElement = document.createElement("td");
    const detailBtn = document.createElement("button");
    detailBtn.textContent = "detail";
    detailBtn.addEventListener("click", () => {
      window.open(`../product-detail/index.html?id=${product.id}`, "_self");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", () => {
      if (confirm("Are you sure to delete this product?")) {
        fetch(`${BASE_URL}/products/${product.id}`, {
          method: "DELETE",
        });
      }
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "edit";

    editBtn.addEventListener("click", () => {
      editedProduct = product;
      modalContainerElement.classList.add("open");
      const form = modalContainerElement.firstElementChild.firstElementChild;
      form.children[0].value = product.id;
      form.children[1].value = product.name;
      form.children[2].value = product.price;
      form.children[3].value = product.category;
      form.children[4].value = product.imageUrl;
      form.children[5].firstElementChild.checked = product.inStock;
    });

    productActionsWrapperElement.append(detailBtn, deleteBtn, editBtn);

    productRowElement.append(productActionsWrapperElement);
    productTableBodyElement.append(productRowElement);
  });
}

getProductsData(1).then((data) => fillTable(data.products));

productsLoadMoreBtn.addEventListener("click", () => {
  if (paginationData.page < paginationData.totalPage)
    getProductsData(paginationData.page + 1).then((data) =>
      fillTable(data.products)
    );
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = editForm.children[0].value;

  fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: editForm.children[1].value,
      price: editForm.children[2].value,
      category: editForm.children[3].value,
      imageUrl: editForm.children[4].value,
      inStock: editForm.children[5].firstElementChild.checked,
    }),
  });
});
