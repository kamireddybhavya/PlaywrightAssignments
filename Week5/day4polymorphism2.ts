class BasePage{
 findElement(){
    console.log("Finding the element");
 } 
 clickElement(){
    console.log("Clicking the element");
 } 

 enterText() {
    console.log("Entering text into the element");
 }
performCommonTasks(){
    console.log("Performing common tasks on the page");
}
}
class  LoginPage extends BasePage{
    performCommonTasks(){
        console.log("Performing login page tasks");
}
}
const basepage = new BasePage();
basepage.findElement();
basepage.clickElement();
basepage.enterText();
basepage.performCommonTasks();
const loginpage = new LoginPage();
loginpage.findElement();
loginpage.clickElement();
loginpage.enterText();
loginpage.performCommonTasks();
