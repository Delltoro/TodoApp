import tasksController from './tasksController';

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
    // activate listening on ui buttons to handle user interactions
    tasksController();
  }

  static renderTasksList(tasks) {
    const tasksList = document.querySelector('.tasks-list');
    tasksList.innerHTML = '';
    tasks.map(taskData => {
      const task = document.createElement('div');
      task.setAttribute('data-id', taskData._id)
      task.classList.add('task-short');
      task.classList.add(taskData.isDone?'done':'active');
      task.innerHTML = `
        <i class="show-full-task fas fa-bars"></i>
        <p class="task-title">${taskData.title}</p>
        <i class="toggle-task-state fas fa-check"></i>`;
      tasksList.appendChild(task);
    });
  }

  static expandTask(taskData) {
    const task = document.querySelector(`div[data-id="${taskData._id}"]`);
    task.classList.remove('task-short');
    task.classList.add('task-full');
    task.innerHTML = `
      <div class="toolbar">
          <i class="collapse-task fas fa-chevron-up"></i>
          <i class="fas fa-pencil-alt"></i>
          <i class="fas fa-trash-alt"></i>
      </div>
      <p class="task-title">${taskData.title}</p>
      <p class="task-text">${taskData.text}</p>
      <p class="tags"></p>`
    const tags = taskData.tags;
    tags.map(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.classList.add('tag');
      tagSpan.textContent = `#${tag} `;
      task.querySelector('.tags').appendChild(tagSpan);
    })
  }

  static collapseTask(taskData) {
    const task = document.querySelector(`div[data-id="${taskData._id}"]`);
    task.classList.remove('task-full');
    task.classList.add('task-short');
    task.classList.add(taskData.isDone?'done':'active');
    task.innerHTML = `
      <i class="show-full-task fas fa-bars"></i>
      <p class="task-title">${taskData.title}</p>
      <i class="toggle-task-state fas fa-check"></i>`;
  }
}

export default UITasks;