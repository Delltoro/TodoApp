import axios from 'axios';
import UITasks from './UITasks';
import { delay } from 'q';

const ENDPOINT = '/api/tasks';


async function getConfig(){
  await delay(1);
  return {"headers":{"x-auth-token":localStorage["x-auth-token"]}}
}

class RoutesTasks {

  static async getUser() {
    try {
      await delay(1);
      const ENDPOINT_USER = '/api/users/me';
      const tasks = await axios.get(`${CONFIG.ServerAPI.url}${ENDPOINT_USER}`,await getConfig());
      UITasks.renderTasksList(tasks.data.tasks);

      document.querySelector('.username-display').innerText = tasks.data.username;
      
      if (tasks.data.avatarURL){
        const imgURL = `url('${tasks.data.avatarURL}')`
        console.log(imgURL);
        document.querySelector(".user-avatar").style.backgroundImage = imgURL;
      }
      return true
    }
    catch(error) {
      console.log(error);
      return false
    }
  }



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

  static async deleteTask(id, item) {
    try {
      console.log(item);
      const task = await axios.delete(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`,await getConfig());
      item.remove();
    }
    catch(error) {
      console.log(error);
    }
  }

  static async setTaskState(id, isDone) {
    try {
      
      axios.put(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`,{
        "isDone": isDone
      }, await getConfig());
    }
    catch(error) {
      console.log(error);
    }
  }

  static async updateTask(event) {
    try {
      const id = await event.target.parentNode.dataset.id;
      const title = await document.querySelector(`div[data-id="${id}"] .task-title input`).value; 
      const text = await document.querySelector(`div[data-id="${id}"] .task-text textarea`).value;
      const task = await axios.put(`${CONFIG.ServerAPI.url}${ENDPOINT}/${id}`,{
        "title": title,
        "text": text
      }, await getConfig());
      UITasks.expandTask(task.data)
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