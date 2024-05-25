const registerForm = document.getElementById("register-form");
const registerEmailField = registerForm.querySelector('input[name="email"]');
const registerPasswordField = registerForm.querySelector(
  'input[name="password"]'
);
const registerCPasswordField = registerForm.querySelector(
  'input[name="cpassword"]'
);
const registerEmailErrorElement = document.getElementById(
  "register-email-error"
);
const registerPasswordErrorElement = document.getElementById(
  "register-password-error"
);
const registerCPasswordErrorElement = document.getElementById(
  "register-cpassword-error"
);

const userTableBodyElement = document.getElementById("user-table-body");

const loginForm = document.getElementById("login-form");
const loginEmailField = loginForm.querySelector('input[name="email"]');
const loginPasswordField = loginForm.querySelector('input[name="password"]');

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateFields()) return;
  createUser();
  resetFields();
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!loginEmailField.value.trim() || !loginPasswordField.value.trim())
    alert("Fill login fields.");
  if (findUser()) {
    alert("Login successfull");
  } else {
    alert("Login Failed");
  }
});

function validateFields() {
  const errorObj = {};
  let email = registerEmailField.value.trim();
  let password = registerPasswordField.value.trim();
  let cPassword = registerCPasswordField.value.trim();

  if (!email) {
    errorObj.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(email)) {
    errorObj.email = "Email format is not correct";
  }

  if (!password) {
    errorObj.password = "Password is required.";
  } else if (password.length < 8) {
    errorObj.password = "Your password must be at least 8 characters";
  } else if (password.search(/[A-Z]/) < 0) {
    errorObj.password =
      "Your password must contain at least one uppercase letter.";
  } else if (password.search(/[a-z]/) < 0) {
    errorObj.password =
      "Your password must contain at least one lowercase letter.";
  } else if (password.search(/[0-9]/) < 0) {
    errorObj.password = "Your password must contain at least one digit.";
  } else if (password.search(/[@$!%*?&]/) < 0) {
    errorObj.password =
      "Your password must contain at least one special character.";
  }

  if (!cPassword) {
    errorObj.cPassword = "Confirm password is required.";
  } else if (cPassword !== password) {
    errorObj.cPassword = "Confirm password is not match with password.";
  }

  fillFieldErrors(errorObj);

  return Object.keys(errorObj).length === 0;
}

function fillFieldErrors(errorObj) {
  registerEmailErrorElement.textContent = errorObj.email || "";
  registerPasswordErrorElement.textContent = errorObj.password || "";
  registerCPasswordErrorElement.textContent = errorObj.cPassword || "";
}

function createUser() {
  let email = registerEmailField.value.trim();
  let password = registerPasswordField.value.trim();
  const tableRow = document.createElement("tr");
  const tableEmailData = document.createElement("td");
  tableEmailData.textContent = email;
  const tablePasswordData = document.createElement("td");
  tablePasswordData.textContent = password;
  const tableOperationData = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  tableOperationData.append(deleteButton);

  deleteButton.addEventListener("click", () => {
    tableRow.remove();
  });

  tableRow.append(tableEmailData, tablePasswordData, tableOperationData);
  userTableBodyElement.append(tableRow);
}

function resetFields() {
  registerEmailField.value = "";
  registerPasswordField.value = "";
  registerCPasswordField.value = "";
}

function findUser() {
  let email = loginEmailField.value.trim();
  let password = loginPasswordField.value.trim();

  const trElements = Array.from(userTableBodyElement.children);

  for (let tr of trElements) {
    if (
      tr.children[0].textContent === email &&
      tr.children[1].textContent === password
    ) {
      return true;
    }
  }

  return false;
}
