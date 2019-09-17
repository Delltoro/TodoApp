import axios from 'axios';
import UITasks from './UITasks';

const getTask = async (id) => {
  try {
    const task = await axios.get(CONFIG.ServerAPI.url + '/api/tasks/' + id);
    UITasks.showFullTask(task.data);
  }
  catch(error) {
    console.log(error);
  }
}

export default getTask;