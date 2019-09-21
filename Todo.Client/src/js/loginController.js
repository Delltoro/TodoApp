import RoutesLogin from './RoutesLogin';

const loginController = () => {
  
  document.querySelector("#loginButton").addEventListener('click',RoutesLogin.login);
}

export default loginController;