import homePageController from './homePageController';

const main = document.querySelector('main');

class UITasks {
  static renderHomePage() {
    const homePage = document.createElement('div');
    homePage.classList.add('home-page');
    main.appendChild(homePage);
    const addTaskField = document.createElement('div');
    addTaskField.classList.add('add-task');
    addTaskField.innerHTML = `
      <i class="fas fa-plus"></i>
      <p class="task-title">add todo</p>`;
    homePage.appendChild(addTaskField);
    const tasksList = document.createElement('div');
    tasksList.classList.add('tasks-list');
    tasksList.innerHTML = `Loading your tasks...`;
    homePage.appendChild(tasksList);

    homePageController();
  }

  static renderTasksList(tasks) {
    const tasksList = document.querySelector('.tasks-list');
    tasksList.innerHTML = '';
    tasks.map(taskData => {
      const task = document.createElement('div');
      task.setAttribute('taskId', taskData._id)
      task.classList.add('task-short');
      task.classList.add(taskData.isDone?'done':'active');
      task.innerHTML = `
        <i class="show-full-task fas fa-bars"></i>
        <p class="task-title">${taskData.title}</p>
        <i class="toggle-task-state fas fa-check"></i>`;
      tasksList.appendChild(task);
    });
  }

  static showFullTask() {
    
  }
}

export default UITasks;