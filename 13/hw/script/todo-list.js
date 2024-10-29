
let todoList = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todoList));
}

function loadTodos() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
        todoList = JSON.parse(savedTodos);
    }
}

const enterButton = document.querySelector('#enter');

enterButton.addEventListener('click', function() {
    const todoInput = document.querySelector("#submit");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Введіть завдання!");
        return;
    }

    todoList.push({ text: todoText});
    saveTodos();
    todoInput.value = "";
    renderTodos();
});

function renderTodos() {
    const listEl = document.querySelector("#list");
    listEl.innerHTML = "";

    todoList.forEach((item, index) => {
        const todoItem = document.createElement("li");
        todoItem.setAttribute('class', 'list-group-item');
        todoItem.textContent = item.text;

        const deleteButton = document.createElement("i");
        deleteButton.classList.add('fa-solid', 'fa-trash', 'remove');

        deleteButton.addEventListener("click", function () {
            todoList.splice(index, 1);
            saveTodos();
            renderTodos();
        });

        todoItem.appendChild(deleteButton);
        listEl.appendChild(todoItem);
    });
}

loadTodos();
renderTodos();

  