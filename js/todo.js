const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];

const TODOS_KEY = "toDos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDeleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //toDos.forEach((item) => console.log(item.id + item.text));
    saveToDos();
}

function paintToDo(newTodoObj) {
    console.log(`i will paint ${newTodoObj.text}`);

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newTodoObj.id;
    button.innerText = "X";
    span.innerText = newTodoObj.text;

    li.appendChild(span);
    li.appendChild(button);

    button.addEventListener("click", handleDeleteTodo);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo, toDoInput.value);

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    saveToDos();
    paintToDo(newTodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}
