import $ from 'jquery';

let allTasks = JSON.parse(localStorage.getItem('tasks'));

$('#tasksTitle').text(`You currently have ${allTasks?.length || "0"} tasks!`);

if (allTasks !== null) {
    allTasks.forEach(task => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.classList.add("taskDescriptions");
        li.textContent = task.taskTitle;
        p.textContent = task.taskDescription;
        $(li).append(p);
        $('#taskList').append(li);
    });
    $('.taskDescriptions').hide()
};

const li = document.querySelectorAll('li');

li.forEach(listItem => {
    $(listItem).on('mouseover', () => {
        $(listItem.childNodes[1]).fadeIn();
    })
    $(listItem).on('mouseout', () => {
        $(listItem.childNodes[1]).fadeOut();
    })
});