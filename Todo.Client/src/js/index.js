import UITasks from './UITasks';
import RoutesTasks from './RoutesTasks';
import loginController from './loginController';



if (window.location.href.match(/.*index.html.*/) || !window.location.href.match(/.*.html.*/)){
    
    if (!localStorage.getItem("x-auth-token")){
    
        window.location.replace(`${window.location.href.split("index.html")[0]}login.html`);
    }
    else{
        UITasks.renderHomePage();
        RoutesTasks.getTasks();
    }
}

if (window.location.href.match(/.*login.html.*/)){
    loginController();
}
