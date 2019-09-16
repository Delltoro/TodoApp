import axios from 'axios';
import UITasks from './UITasks';


const getTasks = async () => {
  try {
    const tasks = await axios.get('http://localhost:5000/api/tasks')
      .then(res => UITasks.renderTasksList(res.data));
  }
  catch(error) {
    console.log(error);
  }
}

export default getTasks;