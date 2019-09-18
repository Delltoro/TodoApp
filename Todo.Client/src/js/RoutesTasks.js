import axios from 'axios';
import UITasks from './UITasks';

class RoutesTasks {

  static async getTasks() {
    try {
      const tasks = await axios.get(CONFIG.ServerAPI.url + '/api/tasks');
      UITasks.renderTasksList(tasks.data);
    }
    catch(error) {
      console.log(error);
    }
  }

  static async getTask(id, option) {
    try {
      const task = await axios.get(CONFIG.ServerAPI.url + '/api/tasks/' + id);
      option === 'expand' ? UITasks.expandTask(task.data) : UITasks.collapseTask(task.data);
    }
    catch(error) {
      console.log(error);
    }
  }

  static async setTaskState(id, isDone) {
    try {
      const task = await axios.get(CONFIG.ServerAPI.url + '/api/tasks/' + id);
      axios.put(CONFIG.ServerAPI.url + '/api/tasks/' + id, {
        "isDone": isDone,
        "title": task.data.title,
        "text": task.data.text,
        "tags": task.data.tags
      });
    }
    catch(error) {
      console.log(error);
    }
  }
}

export default RoutesTasks;