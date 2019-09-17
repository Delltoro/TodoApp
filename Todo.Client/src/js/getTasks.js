import axios from 'axios';
import UITasks from './UITasks';

const getTasks = async () => {
  try {
    const tasks = await axios.get(CONFIG.ServerAPI.url + '/api/tasks');
    UITasks.renderTasksList(tasks.data);
  }
  catch(error) {
    console.log(error);
  }
}

export default getTasks;