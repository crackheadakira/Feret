import $ from 'jquery';

$('#emptyFieldWarning').hide()

let newTask = {
  taskTitle: null,
  taskDescription: null
};
let tasks = [];

$('#openTasks').on('click', () => {
  window.location.href = 'tasks.html';
})

$('#submitButton').on('click', () => {
  newTask.taskTitle = $('#taskTitle')[0].value;
  newTask.taskDescription = $('#taskDescription')[0].value;
  $('#taskTitle')[0].value = '';
  $('#taskDescription')[0].value = '';
  createNewTask(tasks, newTask);
})

// $('#makeTask').on('click', () => {
//   console.log(JSON.parse(localStorage.getItem('tasks')));
// })

function createNewTask(taskArray, taskInfo) {
  $('#emptyFieldWarning').hide()
  if (taskInfo.taskTitle === "" || taskInfo.taskDescription === "") {
    return $('#emptyFieldWarning').show()
  };

  if (localStorage.getItem('tasks') !== null) {
    taskArray = JSON.parse(localStorage.getItem('tasks'));
  };

  taskArray.push(taskInfo);
  return localStorage.setItem('tasks', JSON.stringify(taskArray));
}