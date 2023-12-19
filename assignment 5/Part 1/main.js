let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" data-index="${index}" ${task.completed ? 'checked' : ''}>
            <span class="${task.completed ? 'completed' : ''}" data-index="${index}">${task.name}</span>
            <button data-index="${index}">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.querySelector('#taskInput');
    const taskName = taskInput.value;
    if (taskName.trim() !== '') {
        const newTask = { name: taskName, completed: false };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    }
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

document.querySelector('#addTaskBtn').addEventListener('click', addTask);

document.querySelector('#taskList').addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        const index = event.target.getAttribute('data-index');
        toggleCompletion(index);
    }
});


document.querySelector('#taskList').addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        const index = event.target.getAttribute('data-index');
        deleteTask(index);
    }
});

renderTasks();