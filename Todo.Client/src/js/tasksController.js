import RoutesTasks from './RoutesTasks';
import UITasks from './UITasks';

const tasksController = () => {
  document.querySelector('.home-page').addEventListener('click', event => {

    if(event.target.classList.contains('show-full-task')) {
      RoutesTasks.getTask(event.target.parentElement.dataset.id, 'expand').then(() => {
        document.querySelectorAll('.fa-trash-alt').forEach((item) => {
          item.addEventListener('click', (e) => {
            RoutesTasks.deleteTask(e.target.parentNode.parentNode.dataset.id, e.target.parentNode.parentNode);
          })
        })

        document.querySelectorAll('.fa-pencil-alt').forEach((item) => {
          item.addEventListener('click', (e) => {
            const id = e.target.parentNode.parentNode.dataset.id;
            UITasks.editTask(id)
            document.querySelector(`div[data-id="${id}"] .save`).addEventListener('click',RoutesTasks.updateTask);
          })
        })


      })
    }
    if(event.target.classList.contains('collapse-task')) {
      RoutesTasks.getTask(event.target.parentElement.parentElement.dataset.id, 'collapse');
    }
    if(event.target.classList.contains('toggle-task-state')) {
      if(event.target.parentElement.classList.contains('active')) {
        RoutesTasks.setTaskState(event.target.parentElement.dataset.id, true)
        event.target.parentElement.classList.remove('active');
        event.target.parentElement.classList.add('done');
      } else {
        RoutesTasks.setTaskState(event.target.parentElement.dataset.id, false)
        event.target.parentElement.classList.remove('done');
        event.target.parentElement.classList.add('active');
      }
    }
  })
  document.querySelector(".search-bar").addEventListener('keydown',RoutesTasks.searchTask);
}

export default tasksController;