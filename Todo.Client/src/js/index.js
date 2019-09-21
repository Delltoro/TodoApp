import UITasks from './UITasks';
import {pageData, Page} from './PageModel';

UITasks.renderHomePage();
if (!pageData.getKey()){
    Page.showlogin()
}
else{
    Page.renderTasks()
}



