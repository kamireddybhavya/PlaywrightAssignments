export class LoginPage{
Url:string
Title:string = 'TestLeaf'
constructor(url:string){
 this.Url=url   
}
Login(){
console.log("The user has Logged In")
}

Logout(){
console.log("The user has Logged Out")
    }
}
/* const webpage = new LoginPage("http://leaftaps.com/opentaps/control/main")
console.log(webpage.Title)
console.log(webpage.Url)
webpage.Login()
webpage.Logout() */

//Exportfile.ts
import{LoginPage} from './objectsClasses'
const webpage = new LoginPage("http://leaftaps.com/opentaps/control/main")
console.log(webpage.Title)
console.log(webpage.Url)
webpage.Login()
webpage.Logout()
