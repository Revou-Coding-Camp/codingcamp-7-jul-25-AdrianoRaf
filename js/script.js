console.log('Javascript is Running!');
//Global list
let tasks = [];

// Function to add a new task
function addTask(){
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
}

//Validate input
if (taskInput.value === '') {
    alert('Please enter a task');
    return;
} else {
    //create a new task object
    const newTask = {
        task: taskInput.value,
        dueDate: dueDateInput.value,
        completed: false
    };

    //add the new task to the tasks array
    tasks.push(newTask);

    //clear the input fields
    taskInput.value = '';
    dueDateInput.value = '';
    
    //log the tasks array to the console
    console.log('new task added:', newTask);
}
console.log('Adding task:', taskInput.value, 'Due Date:', dueDateInput.value);

function displayTasks() {
    const taskList = document.querySelector('.todo-list');
}

//function to delete all task
function deleteAllTasks(){

}

//function to filter tasks
function filterTasks() {
    const filter = document.querySelector('.filter-tasks').value;
    const tasks = document.querySelectorAll('.todo-item');
    
    tasks.forEach(task => {
        if (filter === 'all' || task.classList.contains(filter)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}