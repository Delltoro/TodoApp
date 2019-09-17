import axios from 'axios';
import UITasks from './UITasks';
const apiURL = CONFIG.ServerAPI.url;

const getTasks = async () => {
  try {
    const tasks = await axios.get(apiURL + '/api/tasks')
      .then(res => UITasks.renderTasksList(res.data));
  }
  catch(error) {
    console.log(error);
  }
}

export default getTasks;