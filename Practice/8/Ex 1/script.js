const addButton = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');

let storedData = localStorage.getItem('data');

if (storedData) {
    data = JSON.parse(storedData);
} else {
    data = [];
}

addButton.addEventListener('click', () => {
    let taskName = document.getElementById('taskName').value;
    if (taskName.trim()) {
        let li = document.createElement('li');
        li.textContent = taskName;
        taskList.appendChild(li);
        data.push({
            name: taskName, 
            completed: false});
        localStorage.setItem('data', JSON.stringify(data));
    } else {
        alert('Input is empty');
    }
});