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
  
  static async getTask(id) {
    try {
      const task = await axios.get(CONFIG.ServerAPI.url + '/api/tasks/' + id);
      UITasks.showFullTask(task.data);
    }
    catch(error) {
      console.log(error);
    }
  }
}

export default RoutesTasks;