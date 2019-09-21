import UITasks from './UITasks';
import RoutesTasks from './RoutesTasks';
import loginController from './loginController';


async function isLoginAndRun(){
    if (window.location.href.match(/.*index.html.*/) || !window.location.href.match(/.*.html.*/)){
        UITasks.renderHomePage();
        if (!await RoutesTasks.getUser()){
            window.location.replace(`${window.location.href.split("index.html")[0]}login.html`);
        }
    }
    
    if (window.location.href.match(/.*login.html.*/)){
        loginController();
    }
    
}

isLoginAndRun();
