import axios from 'axios';
import UITasks from './UITasks';

const getTasks = async () => {
  try {
    const tasks = await axios.get(CONFIG.ServerAPI.url + '/api/tasks')
      .then(res => UITasks.renderTasksList(res.data));
  }
  catch(error) {
    console.log(error);
  }
}

export default getTasks;