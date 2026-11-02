document.addEventListener('DOMContentLoaded', () => {
    let tasks = [];

    const taskInput = document.getElementById('Task');
    const addButton = document.getElementById('Add-Task');
    const renderButton = document.getElementById('Render');
    const taskListContainer = document.getElementById('Task-List');

    addButton.addEventListener('click', function() {
        if (taskInput.value.trim() !== '') {
            tasks.push(taskInput.value.trim());
            taskInput.value = '';
        }
    });

    renderButton.addEventListener('click', function() {
        taskListContainer.innerHTML = '';
        for (let i = 0; i < tasks.length; i++) {
            taskListContainer.innerHTML += (i + 1) + '. ' + tasks[i] + '<br>';
        }
    });
});