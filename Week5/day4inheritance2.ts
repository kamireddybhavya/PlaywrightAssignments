class  TestData{
    enterCredentials(){
        console.log("Enter Credentials:")
    }
     navigateToHomePage(){
        console.log("Navigate to Home Page")
     }
}
class TestLogin1 extends TestData{
    enterUsername(username:string){
        console.log(`Enter Username: ${username}`)
    } 
    enterPassword(password:string) {
     console.log(`Enter Password: ${password}`)
    } 
}
class TestLogin2 extends TestData{
       enterUsername(username:string){
        console.log(`Enter Username: ${username}`)

    } 
    enterPassword(password:string) {
     console.log(`Enter Password: ${password}`)
    } 
}
const login1 = new TestLogin1();
login1.enterCredentials()
login1.enterUsername("JohnDoe")
login1.enterPassword("12345")
login1.navigateToHomePage()
const login2 = new TestLogin2();
login2.enterCredentials()
login2.enterUsername("JaneDoe")
login2.enterPassword("67890")
login2.navigateToHomePage()
