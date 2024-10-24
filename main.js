document.addEventListener('DOMContentLoaded', loadTodos);
const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        addTodoToDOM(todo.text, todo.completed);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText !== '') {
        addTodoToDOM(taskText, false);
        saveTodoToLocalStorage(taskText, false);
        input.value = '';
    }
});

function addTodoToDOM(text, completed) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    if (completed) {
        li.classList.add('todo-item--checked');
    }

    li.innerHTML = `
        <input type="checkbox" ${completed ? 'checked' : ''}>
        <span class="todo-item__description">${text}</span>
        <button class="todo-item__delete">Видалити</button>
    `;

    li.querySelector('input[type="checkbox"]').addEventListener('change', function() {
        toggleTodoCompletion(text, li);
    });

    li.querySelector('.todo-item__delete').addEventListener('click', function() {
        deleteTodoFromDOM(li, text);
    });

    todosWrapper.appendChild(li);
}

function saveTodoToLocalStorage(text, completed) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push({ text, completed });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function toggleTodoCompletion(text, li) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = todos.map(todo => {
        if (todo.text === text) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));

    li.classList.toggle('todo-item--checked');
}

function deleteTodoFromDOM(li, text) {
    li.remove();

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = todos.filter(todo => todo.text !== text);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}
