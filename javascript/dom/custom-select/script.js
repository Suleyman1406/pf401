const options = [
  "Azerbaycan",
  "Turkiye",
  "Italia",
  "Amerika",
  "Ereb Emirlikleri",
  "Pakistan",
  "Hindistan",
  "Iran",
];

const dropdownMenuElement = document.querySelector(".dropdown-menu");
const dropdownMenuOpenBtnElement = document.querySelector(
  ".input-container img"
);
const inputElement = document.querySelector(".input-container input");
const inputContainerElement = document.querySelector(".input-container");

let isOpen = false;

options.forEach((option) => {
  const menuItemElement = document.createElement("div");
  menuItemElement.className = "menu-item";
  menuItemElement.textContent = option;

  menuItemElement.addEventListener("click", () => {
    inputElement.value = option;
    closeDropdownMenu();
  });
  dropdownMenuElement.append(menuItemElement);
});

inputElement.addEventListener("focus", openDropdownMenu);

window.addEventListener("click", closeDropdownMenu);

inputContainerElement.addEventListener("click", (e) => e.stopPropagation());

dropdownMenuOpenBtnElement.addEventListener("click", () => {
  if (isOpen) {
    closeDropdownMenu();
    inputElement.blur();
  } else {
    inputElement.focus();
  }
});

inputElement.addEventListener("keyup", () => {
  Array.from(dropdownMenuElement.children).forEach((item) => {
    item.style.display = item.textContent
      .toLowerCase()
      .includes(inputElement.value.toLowerCase())
      ? "block"
      : "none";
  });
});

function openDropdownMenu() {
  isOpen = true;
  dropdownMenuOpenBtnElement.style.transform = "rotate(180deg)";
  dropdownMenuElement.classList.remove("close");
  dropdownMenuElement.classList.add("open");
}
function closeDropdownMenu() {
  isOpen = false;
  dropdownMenuOpenBtnElement.style.transform = "rotate(0deg)";
  dropdownMenuElement.classList.add("close");
  dropdownMenuElement.classList.remove("open");
}
