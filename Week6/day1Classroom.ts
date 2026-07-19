//abstrction.ts
  export interface  PageRules{
     verifyPage(): void
}
export abstract class  BasePage1 implements PageRules{
    abstract verifyPage():void
    
     waitForPageLoad() {
        console.log("Waiting for page to load")
    }
    getPageTitle(){
        console.log("Getting page title")
    }
}
//abstractionExecution.ts
import{ BasePage1, PageRules} from "./abstraction"

class  LoginPage1 extends BasePage1 implements PageRules{
   verifyPage() {
        console.log("Login page Verified")
        }
    enterUsername(){
        console.log("Username Entered")
    }
    enterPassword(){
        console.log("Password Entered")
    }  
    clickLogin(){
       console.log("Login button clicked")
    }
}
const lpage = new LoginPage1()
lpage.waitForPageLoad()
lpage.verifyPage()
lpage.enterUsername()
lpage.enterPassword()
lpage.clickLogin()
lpage.getPageTitle()



