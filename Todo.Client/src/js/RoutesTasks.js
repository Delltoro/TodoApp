import axios from 'axios';
import UITasks from './UITasks';
import { delay } from 'q';

const ENDPOINT = '/api/tasks';


async function getConfig(){
  await delay(1);
  return {"headers":{"x-auth-token":localStorage["x-auth-token"]}}
}

class RoutesTasks {

  static async getTasks() {
    try {
      await delay(1);
      const tasks = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT}`,await getConfig());
      UITasks.renderTasksList(tasks.data);
    }
    catch(error) {
      console.log(error);
    }
  }

  static async getTask(id, option) {
    try {
      const task = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`,await getConfig());
      option === 'expand' ? UITasks.expandTask(task.data) : UITasks.collapseTask(task.data);
    }
    catch(error) {
      console.log(error);
    }
  }

  static async setTaskState(id, isDone) {
    try {
      const task = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`,await getConfig());
      axios.put(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`,{
        "isDone": isDone,
        "title": task.data.title,
        "text": task.data.text,
        "tags": task.data.tags
      }, await getConfig());
    }
    catch(error) {
      console.log(error);
    }
  }

  static async searchTask(event){
    try {
        await delay(1);
        let searchValue = event.srcElement.value;
        const tasks = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT}`,await getConfig())

        let regexp = new RegExp(`.*${searchValue}.*`, 'i');
        let matches = tasks.data.filter((task) => task.title.match(regexp));

        UITasks.renderTasksList(matches);
    }
    catch(error) {
      console.log(error);
    }
  }
}

export default RoutesTasks;