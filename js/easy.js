let newTask;
let newTaskText = "";
const app = document.querySelector("#app");
const taskContainer = app.querySelector(".container");
const input = document.querySelector("#task-to-add");
const button = document.querySelector(".button");

const createNewTask = () => {
    newTask = taskContainer.querySelector(".task-template").cloneNode(true);
    newTask.classList.remove("task-template");
    newTask.querySelector("p").innerHTML = newTaskText;
    newTask.querySelector(".not-done").onclick = e => changeTaskStatus(e);
    
    newTask.querySelector(".far").onclick = e => {
        confirm("Opravdu chceš úkol smazat?") ? removeTask(e) : "";
    }
}

const addTask = () => {
    createNewTask();
    taskContainer.appendChild(newTask);
}

const changeTaskStatus = e => {
    e.target.classList.contains("done") ? e.target.classList.remove("done") : e.target.classList.add("done")
}

const removeTask = e => {
    e.target.parentElement.remove();
}

button.onclick = e => {
    e.preventDefault();
    input.value ? addTask() : alert("Nejdříve napiš úkol.")
    input.value = "";
}

input.onkeyup = e => {
    newTaskText = e.target.value;
}

