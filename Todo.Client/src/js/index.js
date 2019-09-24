import UITasks from './UITasks';
import RoutesTasks from './RoutesTasks';
import loginController from './loginController';
import registerController from './registerController';


function isIndexFile(){
    return window.location.href.match(/.*index.html.*/) || !window.location.href.match(/.*.html.*/);
}

function isLoginFile(){
    return window.location.href.match(/.*login.html.*/);
}

function isRegisterFile(){
    return window.location.href.match(/.*register.html.*/);
}

function redirectToLogin(){
    window.location.replace(`${window.location.href.split("index.html")[0]}login.html`);
}

async function isLoginAndRun(){

    if (isIndexFile()){

        UITasks.renderHomePage();
        if (!await RoutesTasks.getUser()){

            redirectToLogin()
        }
    }
    
    if (isLoginFile()){
        loginController();
    }

    if (isRegisterFile()){
        registerController();
    }
  
}

isLoginAndRun();
