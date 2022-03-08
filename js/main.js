let doneTasksNo = 0;
let totalTasksNo = 0;
let newTask;
let newTaskText = "";

const doneTasks = document.querySelector("#completed");
const totalTasks = document.querySelector("#total");

const app = document.querySelector("#app");

const taskContainer = app.querySelector(".container");

const input = document.querySelector("#task-to-add");
const button = document.querySelector(".button");


const showTaskStats = () => {
    doneTasks.innerHTML = doneTasksNo > 9 ? doneTasksNo : `0${doneTasksNo}`;
    totalTasks.innerHTML = totalTasksNo > 9 ? totalTasksNo :`0${totalTasksNo}`;
}

const createNewTask = () => {
    newTask = taskContainer.querySelector(".task-template").cloneNode(true);
    newTask.classList.remove("task-template");
    newTask.querySelector("p").innerHTML = newTaskText;
    newTask.querySelector(".not-done").onclick = e =>{
        changeTaskStatus(e);
    }

    newTask.querySelector(".far").onclick = e =>{
        confirm("Opravdu chceš úkol smazat?") ? removeTask(e) : "";
    }
}

const addTask = () => {
    createNewTask();
    taskContainer.appendChild(newTask);
    totalTasksNo++;
    showTaskStats();
}

const changeTaskStatus = e => {
    e.target.classList.contains("done") ?
        
    (e.target.classList.remove("done"), doneTasksNo--)
    :
    (e.target.classList.add("done"), doneTasksNo++)

    showTaskStats();
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
    if (e.keyCode == 13) {
        e.target.value ? addTask() : alert("Nejdříve napiš úkol.")
        e.target.value = ""
    }

}

const init = ( ) => {
    showTaskStats();
    console.log("App initiated");
}

init();
