import RoutesRegister from './RoutesRegister';

const registerController = () => {
  
  document.querySelector("#registerButton").addEventListener('click',RoutesRegister.register);
}

export default registerController;