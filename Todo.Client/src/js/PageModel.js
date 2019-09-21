import RoutesTasks from './RoutesTasks';

class Page{
    constructor() {
        this.loadKeyFromLocalStorage();
    }

    getKey(){
        return this.key;
    }
    
    setKey(key){
        this.key = key;
        this.saveKeyToLocalStorage();
    }

    loadKeyFromLocalStorage(){
        this.key = localStorage.getItem("x-auth-token")
    }

    saveKeyToLocalStorage(){
        localStorage["x-auth-token"] = this.key;
    }

    static showlogin(){

        document.querySelector('.login-container').style.display = "block";
        document.querySelector('.app-container').style.display = "none";
        // let loginContainer = await document.querySelector('.login-container')
        // let appContainer = await document.querySelector('.app-container')

        // loginContainer.style.display = "block";
        // appContainer.style.display = "none";
    }

    static hidelogin(){

        document.querySelector('.login-container').style.display = "none";
        document.querySelector('.app-container').style.display = "block";

        // let loginContainer = await document.querySelector('.login-container')
        // let appContainer = await document.querySelector('.app-container')

        // loginContainer.style.display = "none";
        // appContainer.style.display = "block";
    }

    static renderTasks(){
        RoutesTasks.getTasks();
    }
}


const pageData = new Page();
export {pageData, Page };