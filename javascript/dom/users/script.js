const userTableBodyElement = document.getElementById("user-table-body");
const modalContainerElement = document.querySelector(".modal-container");
const modalCloseBtnElement = document.querySelector("#close-modal-btn");

const addUserForm = document.getElementById("add-user-form");
const userNameField = addUserForm.querySelector(`input[name="user-name"]`);
const userSurnameField = addUserForm.querySelector(
  `input[name="user-surname"]`
);
const userAgeField = addUserForm.querySelector(`input[name="user-age"]`);

const editUserForm = document.getElementById("edit-user-form");
const userNameEditField = editUserForm.querySelector(`input[name="user-name"]`);
const userSurnameEditField = editUserForm.querySelector(
  `input[name="user-surname"]`
);
const userAgeEditField = editUserForm.querySelector(`input[name="user-age"]`);

let editedRow = null;

addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateFields(userNameField, userSurnameField, userAgeField)) {
    alert("All fields are required!");
    return;
  }
  createUserRow();
  resetFields();
});

modalCloseBtnElement.addEventListener("click", closeModal);

editUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !validateFields(userNameEditField, userSurnameEditField, userAgeEditField)
  ) {
    alert("All fields are required!");
    return;
  }
  editRow();
  closeModal();
});

function validateFields(...fields) {
  for (let field of fields) {
    if (!field.value) {
      return false;
    }
  }
  return true;
}

function createUserRow() {
  const name = userNameField.value,
    surname = userSurnameField.value,
    age = userAgeField.value;
  const row = document.createElement("tr");

  const nameTd = document.createElement("td");
  nameTd.textContent = name;

  const surnameTd = document.createElement("td");
  surnameTd.textContent = surname;

  const ageTd = document.createElement("td");
  ageTd.textContent = age;

  const deleteTd = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteTd.append(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    // userTableBodyElement.removeChild(row);
    row.remove();
  });
  const editTd = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.textContent = "<>";
  editTd.append(editBtn);
  editBtn.addEventListener("click", () => {
    editedRow = row;
    fillEditFields();
    openModal();
  });

  row.append(nameTd, surnameTd, ageTd, editTd, deleteTd);
  userTableBodyElement.append(row);
}

function resetFields() {
  userNameField.value = "";
  userSurnameField.value = "";
  userAgeField.value = "";
}

function openModal() {
  modalContainerElement.classList.add("open-modal");
}

function closeModal() {
  modalContainerElement.classList.remove("open-modal");
}

function fillEditFields() {
  userNameEditField.value = editedRow.children[0].textContent;
  userSurnameEditField.value = editedRow.children[1].textContent;
  userAgeEditField.value = editedRow.children[2].textContent;
}

function editRow() {
  editedRow.children[0].textContent = userNameEditField.value;
  editedRow.children[1].textContent = userSurnameEditField.value;
  editedRow.children[2].textContent = userAgeEditField.value;
}
