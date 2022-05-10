import $ from 'jquery';

let allTasks = JSON.parse(localStorage.getItem('tasks'));

$('#tasksTitle').text(`You currently have ${allTasks?.length || "0"} tasks!`);

if (allTasks !== null) {
    allTasks.forEach(task => {
        let li = document.createElement('li');
        li.textContent = task.taskTitle;
        $('#taskList').append(li)
    });
};