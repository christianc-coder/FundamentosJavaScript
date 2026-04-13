const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const delateTaskBtn = document.getElementById("delateTask");
let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if ( taskText  !== "" ){

        // Empuja el objeto a un array
        tasks.push({text: taskText, completed: false});

        //Limpia entrada
        taskInput.value = "";
        displayTasks();
    }
} 

function displayTasks(){

    //Limpia la salida 
    taskList.innerHTML = "";
    // Recorre cada elemento creando un elemento li y muestra info
    tasks.forEach((task,index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                    li.querySelector("input").addEventListener("change", () => toggleTask(index));
                    taskList.appendChild(li);

    });
} 

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks(); 
}

// Limpia las tareas completadas
function clearCompletedTasks(){
    tasks = tasks.filter( task => !task.completed);
    displayTasks();
}

delateTaskBtn.addEventListener( "click", () => {
   tasks.length = 0; 
   displayTasks();
});
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);


