const todoinputElement = document.querySelector(".new-todo");
const todoCreateForm = document.getElementById("todo-create-form");
const todoList = document.querySelector(".todo-list");
const iconImg = document.querySelector(".iconimg");
const activeBtn = document.querySelectorAll(".li-active");
const spanItemsElement = document.querySelector(".span-items");
const allClick = document.getElementById("allclick");
const activeClick = document.getElementById("activeclick");
const completedClick = document.getElementById("completedclick");
const clearBtn = document.querySelector(".clear-btn");

const uid = new ShortUniqueId({ length: 10 });

const STATUS = {
  COMPLETED: 1,
  ACTIVE: 0,
};

const defaultTodos = [
  { id: uid.rnd(), title: "Learn JavaScript", status: STATUS.ACTIVE },
  { id: uid.rnd(), title: "Learn React", status: STATUS.COMPLETED },
  { id: uid.rnd(), title: "Have a life!", status: STATUS.ACTIVE },
];

function fillTodosFromLocalStorage() {
  let todos = getTodosFromLocalStorage();
  if (!todos) {
    setTodosToLocalStorage(defaultTodos);
    todos = defaultTodos;
  }

  todos.forEach(createToDoElement);
  countItems();
}

function createToDoElement(todo) {
  const liElement = document.createElement("li");
  liElement.className = `li-element completed`;
  if (todo.status === STATUS.COMPLETED) {
    liElement.classList.add("checked");
  }
  liElement.innerHTML = `
        <div class="view">
            <div class="todo-text">
                <input class="toggle" type="checkbox">
                <label for="Checkboxelement" class="label-element ">${todo.title}</label>
            </div>
            <button class="delete-btn">x</button>
        </div>
    `;
  const checkboxInputElement = liElement.querySelector("input");
  checkboxInputElement.checked = todo.status === STATUS.COMPLETED;
  checkboxInputElement.addEventListener("change", () => {
    const todos = getTodosFromLocalStorage();
    const checked = checkboxInputElement.checked;
    const changedTodo = todos.find((item) => item.id === todo.id);
    changedTodo.status = checked ? STATUS.COMPLETED : STATUS.ACTIVE;
    setTodosToLocalStorage(todos);

    liElement.classList.toggle("checked");
    countItems();
  });

  liElement.querySelector("button").addEventListener("click", () => {
    const todos = getTodosFromLocalStorage();
    const filteredTodos = todos.filter((item) => item.id !== todo.id);
    setTodosToLocalStorage(filteredTodos);
    liElement.remove();
    countItems();
  });

  todoList.append(liElement);
}

todoCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = todoinputElement.value.trim();
  if (!title) return;
  const newTodo = {
    id: uid.rnd(),
    title,
    status: STATUS.ACTIVE,
  };
  const todos = getTodosFromLocalStorage();
  todos.push(newTodo);
  setTodosToLocalStorage(todos);
  createToDoElement(newTodo);
  todoinputElement.value = "";
});

function countItems() {
  const todos = getTodosFromLocalStorage();
  const count = todos.filter((todo) => todo.status === STATUS.ACTIVE).length;
  spanItemsElement.textContent = count;
}

allClick.addEventListener("click", () => {
  console.log(todoList.children);
  Array.from(todoList.children).forEach(
    (item) => (item.style.display = "list-item")
  );
  activeClick.classList.remove("active");
  allClick.classList.add("active");
  completedClick.classList.remove("active");
});

activeClick.addEventListener("click", () => {
  Array.from(todoList.children).forEach((item) => {
    item.style.display = !item.classList.contains("checked")
      ? "list-item"
      : "none";
  });
  activeClick.classList.add("active");
  allClick.classList.remove("active");
  completedClick.classList.remove("active");
});

completedClick.addEventListener("click", () => {
  Array.from(todoList.children).forEach((item) => {
    item.style.display = item.classList.contains("checked")
      ? "list-item"
      : "none";
  });
  activeClick.classList.remove("active");
  allClick.classList.remove("active");
  completedClick.classList.add("active");
});

function getTodosFromLocalStorage() {
  return JSON.parse(localStorage.getItem("todos"));
}

function setTodosToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

fillTodosFromLocalStorage();
