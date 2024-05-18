const accordionItems = document.getElementsByClassName("accordion-item");

Array.from(accordionItems).forEach((accItem) => {
  accItem.addEventListener("click", () => {
    const isOpen = accItem.classList.contains("open");
    closeAllAccordionItems();
    if (!isOpen) {
      accItem.classList.add("open");
    }
  });
});

function closeAllAccordionItems() {
  Array.from(accordionItems).forEach((item) => {
    item.classList.remove("open");
  });
}
