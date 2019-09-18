import axios from 'axios';
import UITasks from './UITasks';

const ENDPOINT = '/api/tasks';

class RoutesTasks {

  static async getTasks() {
    try {
      const tasks = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT}`);
      UITasks.renderTasksList(tasks.data);
    }
    catch(error) {
      console.log(error);
    }
  }

  static async getTask(id, option) {
    try {
      const task = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`);
      option === 'expand' ? UITasks.expandTask(task.data) : UITasks.collapseTask(task.data);
    }
    catch(error) {
      console.log(error);
    }
  }

  static async setTaskState(id, isDone) {
    try {
      const task = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`);
      axios.put(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`, {
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