// import UITasks from './UITasks';
import RoutesTasks from './RoutesTasks';

const tasksController = () => {
  document.querySelector('.home-page').addEventListener('click', event => {

    if(event.target.classList.contains('show-full-task')) {
      RoutesTasks.getTask(event.target.parentElement.dataset.id)
    }

  })
}

export default tasksController;