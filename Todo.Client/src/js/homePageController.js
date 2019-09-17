import UITasks from './UITasks';

const homePageController = () => {
  document.querySelector('.home-page').addEventListener('click', event => {

    if(event.target.classList.contains('show-full-task')) {
      UITasks.showFullTask(event.target);
    }
    // console.log(event.target);

  })
}

export default homePageController;