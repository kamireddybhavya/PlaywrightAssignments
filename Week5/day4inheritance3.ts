class WebComponent{
    selector:string
    constructor(selector:string){
        this.selector = selector
    }
click(){
    console.log(`Clicked on component: ${this.selector}`)
}
focus(){
    console.log(`Focused on component: ${this.selector}`)
}
}
class Button extends WebComponent{
    click(){
     super.click();
    console.log("Button-specific click action")
    }
}
class TextInput extends WebComponent{
    value:string=""
    enterText(text: string){
        this.value = text
        console.log(`Entered text "${this.value}" into ${this.selector}`);
    }

}
function testComponents() {

    const loginButton = new Button("#loginBtn");
    const usernameField = new TextInput("#username");

    loginButton.focus();
    loginButton.click();

    usernameField.focus();
    usernameField.enterText("Bhavya");
}

testComponents();
