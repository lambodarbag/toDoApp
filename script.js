const button = document.querySelector("button");
const inputBox = document.querySelector("input");
const list = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

// function to render todos on the UI
function renderTodos() {
    list.innerHTML = "";

    todos.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;
        li.dataset.index = index;
        li.style.cursor = "pointer";

        if (task.completed) {
            li.classList.add("completed");
        }

        list.appendChild(li);
    });
}
renderTodos();


button.addEventListener("click", (e) => {
    let value = inputBox.value.trim();
    if (value === "") return;
    addToDo(value);
});

list.addEventListener("click", (e) => {
    if (e.target.tagName !== "LI") return;
    completedToDo(e);
});

// function to add new task to todos array
function addToDo(value) {
    todos.push({
        text: value,
        completed: false
    });

    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    inputBox.value = "";
}

// function to mark task as completed and remove from todos array
function completedToDo(e) {
    const index = e.target.dataset.index;

    // todos array se task remove
    todos.splice(index, 1);

    // localStorage update
    localStorage.setItem("todos", JSON.stringify(todos));

    // UI re-render
    renderTodos();
}


