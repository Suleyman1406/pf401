const burgerMenuToggleBtnElement = document.querySelector(".burger-menu-button");
const burgerMenuElement = document.querySelector(".topbar-menu");
let isOpen = false;

burgerMenuToggleBtnElement.addEventListener("click", () =>{
  isOpen = !isOpen;
  burgerMenuToggleBtnElement.style.transform = isOpen ? "rotate(90deg)" : "rotate(0deg)"
  burgerMenuElement.classList.toggle("open");
})
