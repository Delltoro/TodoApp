import axios from 'axios';
import UITasks from './UITasks';
import { delay } from 'q';

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

  static async searchTask(event){
    try {
        await delay(1);
        let searchValue = event.srcElement.value;
        const tasks = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT}`)

        let regexp = new RegExp(".*" + searchValue + ".*", 'i');
        let matches = tasks.data.filter((task) => task.title.match(regexp));

        UITasks.renderTasksList(matches);
    }
    catch(error) {
      console.log(error);
    }
  }
}

export default RoutesTasks;