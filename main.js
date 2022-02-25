import { BUTTON } from './view.js';

function addTask(event) {
  let taskList = event.currentTarget.parentElement.nextElementSibling;
  let input = event.currentTarget.previousElementSibling.value;

  let newTask = document.createElement('li');

  newTask.className = 'to-do__list-item flex';
  newTask.innerHTML = `
  <button class="checkbox-btn"></button> 
  <p class="to-do__task-descr">${input}</p> 
  <button class="del-task-btn"></button>
  `;
  taskList.prepend(newTask);
  
  newTask.lastElementChild.addEventListener('click', deleteTask);
  newTask.firstElementChild.addEventListener('click', changeStatus);
}

function deleteTask(event) {
  event.currentTarget.parentElement.remove();
}

function changeStatus(event) {
  event.currentTarget.classList.toggle('checkbox-btn_done');
  event.currentTarget.parentElement.classList.toggle('to-do__list-item_done');
}

for (let btn of BUTTON.ADD_TASK) {
  btn.addEventListener('click', addTask);
}

for (let btn of BUTTON.DELETE_TASK) {
  btn.addEventListener('click', deleteTask);
}

for (let btn of BUTTON.CHANGE_STATUS) {
  btn.addEventListener('click', changeStatus);
}

