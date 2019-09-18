import RoutesTasks from './RoutesTasks';

const tasksController = () => {
  document.querySelector('.home-page').addEventListener('click', event => {

    if(event.target.classList.contains('show-full-task')) {
      RoutesTasks.getTask(event.target.parentElement.dataset.id, 'expand');
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
}

export default tasksController;