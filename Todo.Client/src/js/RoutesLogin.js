import axios from 'axios';
import {pageData, Page} from './PageModel';

const ENDPOINT = '/api/login';

class RoutesLogin {
  static async login(event){
    try {
        event.preventDefault();
        const data = {
            username : event.srcElement.parentNode.children.username.value,
            password : event.srcElement.parentNode.children.password.value
        }
        const res = await axios.post(`${CONFIG.ServerAPI.url}${ENDPOINT}`, data);
        
        pageData.setKey(res.data);
        Page.renderTasks();
        Page.hidelogin();

    }
    catch(error) {
      console.log(error);
      document.querySelector('.login-container label').innerText=error.response.data;
    }
  }
}

export default RoutesLogin;