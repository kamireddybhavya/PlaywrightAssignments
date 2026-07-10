//Method Overloading
class TextBox {

    fill(text: string): void;
    fill(text: string, locator: string): void;
    fill(text: string, locator?: string): void {

        if (locator) {
            console.log(`Filling ${text} in locator '${locator}'`);
        } else {
            console.log(`Filling ${text}`);
        }
    }
}
const text = new TextBox();
text.fill("Bhavya");
text.fill("Bhavya", "#username");

//Method Overriding

class Browser2{
    browserVersion2(){
        console.log("Browser Version is Genric")
    }
}

class Chrome1 extends Browser2{
browserVersion2(){
        console.log("Browser Version is V138")
    }
}
const version = new Chrome1()
    version.browserVersion2()
