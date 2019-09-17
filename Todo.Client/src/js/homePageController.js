// import UITasks from './UITasks';
import getTask from './getTask';

const homePageController = () => {
  document.querySelector('.home-page').addEventListener('click', event => {

    if(event.target.classList.contains('show-full-task')) {
      getTask(event.target.parentElement.dataset.id)
    }

  })
}

export default homePageController;