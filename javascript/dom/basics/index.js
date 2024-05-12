// document.body.style.backgroundColor = "red";

// console.log();
// document.body.childNodes[1].style.backgroundColor = "yellow";

// if (document.body.children[1])
//   document.body.children[1].style.backgroundColor = "red";

// ChildNodes elementin icindeki nodelari array (NodeList) formatinda gonderir
// Children elementing icindeki elementleri array (Collection) formatinda gonderir.

// document.body.children[0].children[0].href = "https://dadashow.me";
// document.body.children[0].children[0].textContent = "Dadashow's website";

// document.body.firstElementChild.firstElementChild.textContent = "Armud";
// document.body.firstElementChild.lastElementChild.textContent = "Yumurta";

// console.log(
//   document.body.firstElementChild.parentElement.parentElement.parentElement
// );

// console.log(
//   document.body.firstElementChild.firstElementChild.nextElementSibling
//     .nextElementSibling.nextElementSibling.previousElementSibling
//     .previousElementSibling.previousElementSibling.previousElementSibling
// );

// const titleElement = document.getElementById("title");

// titleElement.textContent = "Ilhan Yatma!";
// titleElement.style.color = "green";
// titleElement.style.position = "absolute";
// titleElement.style.top = "100px";

// const emiraslanThings = document.getElementsByClassName("card");

// emiraslanThings[0].textContent += " ve zerli qelemi";
// emiraslanThings[0].textContent = emiraslanThings[0].textContent+ " ve zerli qelemi";

// const emiraslanThings = document.getElementsByTagName("h3");

// let fontSize = 10;
// Array.from(emiraslanThings).forEach((item) => {
//   console.log(item);
//   item.style.fontSize = `${fontSize}px`;
//   fontSize += 20;
// });

// querySelector

// const element = document.querySelector("#title");
// const element = document.querySelector(".card");
// const element = document.querySelector("div > a > span:first-child");
// element.style.backgroundColor = "red";

// const elements = document.querySelectorAll(".card");

// elements.forEach((item) => {
//   item.style.backgroundColor = "red";
// });

// const element = document.getElementById("title");
// console.log(element);

// const divElement = document.querySelector("div");

// divElement.textContent = `<a href="#">text from JS</a>`;
// divElement.innerHTML = `<a href="#">text from JS</a>`;
// divElement.outerHTML = `<span>Test</span>`;

// const containerElement = document.getElementsByClassName("container")[0];
// const containerElement = document.querySelectorAll(".container")[0];
// const containerElement = document.querySelector(".container");
// const newPElement = document.createElement("p");
// newPElement.textContent = "Windows 11";

// document.body.append(newPElement);
// document.body.prepend(newPElement);
// containerElement.append(newPElement);

// const newSpanElement = document.createElement("span");
// newSpanElement.textContent = "Windows 10";

// containerElement.prepend(newSpanElement);

// <!-- <tr>
//     <td>Fuad</td>
//     <td>Selimzade</td>
//     <td>30</td>
//   </tr> -->

// const tableBodyElement = document.querySelector("table tbody");

// tableBodyElement.innerHTML += `
//   <tr>
//     <td style="background-color: red">Fuad</td>
//     <td>Selimzade</td>
//     <td>30</td>
//   </tr>
// `;

// const newTrElement = document.createElement("tr");
// const newTdNameElement = document.createElement("td");
// newTdNameElement.textContent = "Fuad";
// newTdNameElement.style.backgroundColor = "red";

// const newTdSurnameElement = document.createElement("td");
// newTdSurnameElement.textContent = "Selimzade";
// const newTdAgeElement = document.createElement("td");
// newTdAgeElement.textContent = 30;

// newTrElement.append(newTdNameElement, newTdSurnameElement, newTdAgeElement);
// tableBodyElement.append(newTrElement);

// console.log(tableBodyElement);

// const titleElement = document.querySelector(".title");
// const newPElemenrt = document.createElement("p");
// newPElemenrt.textContent = "new eleemnt from  JS";

// titleElement.before(newPElemenrt);

// const newPElement = document.createElement("p");
// newPElement.textContent = "New P from JS";
// document.body.append(newPElement);

// document.body.remove();
// document.body.removeChild(newPElement);

// const divElement = document.getElementsByTagName("div")[0];
// divElement.remove();

const cards = document.querySelectorAll(".card");

// cards[0].className += " active";

// cards[0].classList.add("active");
// cards[0].classList.remove("active");
cards[1].classList.toggle("active");
