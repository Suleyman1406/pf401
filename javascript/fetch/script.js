const tableBody = document.querySelector("tbody");
const createForm = document.querySelector("#create-form");

async function getProducts() {
  // GET
  // const result = fetch("https://northwind.vercel.app/api/products");
  // let products = [];
  // await result
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     products = data;
  //   });

  // return products;
  const response = await fetch("https://northwind.vercel.app/api/products");
  const products = await response.json();
  return products;
}

async function fillTable() {
  const products = await getProducts();
  products.sort((a, b) => a.id - b.id);
  products.forEach(createProductElement);
}

function createProductElement(item) {
  const trElement = document.createElement("tr");

  trElement.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.quantityPerUnit}</td>
      <td>${item.supplier?.companyName ?? "-"}</td>
      <td><button>Delete</button></td>
    `;
  trElement.querySelector("button").addEventListener("click", () => {
    if (!confirm("Are you sure to delete?")) return;
    fetch(`https://northwind.vercel.app/api/products/${item.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        trElement.remove();
      }
    });
  });

  tableBody.append(trElement);
}

fillTable();

createForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.children[0].value;
  const quantityPerUnit = e.target.children[1].value;

  const response = await fetch("https://northwind.vercel.app/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      quantityPerUnit,
    }),
  });

  if (response.status === 201) {
    const product = await response.json();
    createProductElement(product);
  }
});
