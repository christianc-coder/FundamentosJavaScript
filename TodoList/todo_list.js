const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTaskBtn (){
    const taskText = taskInput.value.trim();
    if ( taskText  !== "" ){

        // Empuja el objeto a un array
        tasks.push({texto: taskText});

        //Limpia entrada
        taskInput.value = "";
        displayTasks();
    }
} 

function displayTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task,index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                    li.querySelector(input).addEventListener("change", () => toggleTask(index));
                    taskList.appendChild(li);

    });
} 