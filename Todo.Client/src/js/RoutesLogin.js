import axios from 'axios';

const ENDPOINT = '/api/login';

class RoutesLogin {
  static async login(event){
    try {
        event.preventDefault();

        const data = {
          username : document.querySelector('#username').value,
          password : document.querySelector('#password').value,
      }
        const res = await axios.post(`${CONFIG.ServerAPI.url}${ENDPOINT}`, data);
        
        localStorage["x-auth-token"] = res.data;

        window.location.replace(`${window.location.href.split("login.html")[0]}index.html`);
   
    }
    catch(error) {
      console.log(error);
      document.querySelector('#labelButton').innerText=error.response.data;
    }
  }
}

export default RoutesLogin;