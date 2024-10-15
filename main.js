const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () =>{
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (e) =>{
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        taskList.removeChild(li);
    }
});

