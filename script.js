document.addEventListener('DOMContentLoaded', getTodos);

function getTodos() {
    fetch('https://dummyjson.com/todos')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const todosArray = Array.isArray(data.todos) ? data.todos : [];
            displayTodos(todosArray);
        })
        .catch(error => console.error('Error fetching or parsing data:', error));
}


function displayTodos(todos) {
    const todosList = document.getElementById('todosList');
    todosList.innerHTML = '';

    if (!Array.isArray(todos)) {
        console.error('Data received is not an array');
        return;
    }

    if (todos.length === 0) {
        console.log('No carts found.');
        return;
    }


todos.forEach(todos => {
    const todosRow = document.createElement('tr');

    const id = document.createElement('td');
    id.textContent = todos.id;

    const todo = document.createElement('td');
    todo.textContent = todos.todo;

    const completed = document.createElement('td');
    completed.textContent = todos.completed;

    const userId = document.createElement('td');
    userId.textContent = todos.userId;



    todosRow.appendChild(id);
        todosRow.appendChild(todo);
        todosRow.appendChild(completed);
        todosRow.appendChild(userId);

        todosList.appendChild(todosRow);
    });
}

function searchTodos() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    fetch('https://dummyjson.com/todos')
        .then(response => response.json())
        .then(data => {
            const todosArray = Array.isArray(data.todos) ? data.todos : [];
            const filteredTodos = todosArray.filter(todos => {
                return todos .completed.toLowerCase().includes(searchTerm);
            });
            displayTodos(filteredTodos);
        })
        .catch(error => console.error('Error fetching data:', error));
}
