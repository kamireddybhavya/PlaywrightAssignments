//Loginpage.ts
/// <reference types="node" />
import { Page } from "playwright/test";

export class Loginpage{
    page:Page
    constructor(page:Page){
        this.page=page
   }
   async loginURL(url:string)
    {
       await this.page.goto(url)
    }
    async loginDetails(username:string,password:string){
        await this.page.locator(`#username`).fill(username)
        await this.page.locator(`#password`).fill(password)
        
    }
    async loginbutton(){
        await this.page.locator('.decorativeSubmit').click()
    }
    async closebrowser(){
        await this.page.close()
    } 
}


//Welcome.ts

import { Loginpage } from "./loginPage";
export class WelcomePage extends Loginpage {
    async clickWelcome(){
        await this.page.getByRole(`link`,{name:'CRM/SFA'}).click()
    }
    async logout(){
        await this.page.locator(`.decorativeSubmit`).click()
    }
}

//Home.ts
import {WelcomePage} from "./welcome"
export class Home extends WelcomePage{
    async clickAccount(){
        await this.page.locator(`//a[text()="Accounts"]`).click()
    }
}


//AccountCreation.ts
import {Home} from "./home"
export class CreateAccounts extends Home{
    async ClickAccountCreate(){
        await this.page.locator(`//a[text()='Create Account']`).click()
    }
}


//AccountForm.ts
import {CreateAccounts}from "./createAccount"
export class AccountForm extends CreateAccounts{
    async Details(){
        await this.page.locator(`#accountName`).fill(`HR`)
        await this.page.locator(`#groupNameLocal`).fill(`Vijaya`)
    }
    async submitDetails(){
        await this.page.locator(`[value="Create Account"]`).click()
    }
    
}

//Verify.ts
import {AccountForm} from "./accountForm"
import { expect } from "@playwright/test";  
export class Verify extends AccountForm{
    async verify (){
     await expect(this.page.getByText(/HR/)).toBeVisible();
    }
}

//VerifyTest.spec.ts
import{test}from"@playwright/test"
import{Verify} from "../pages/verify"
test("Account Creation",async({page})=>{
const form = new Verify(page)

await form.loginURL("https://leaftaps.com/opentaps/control/login")
await form.loginDetails('demoCSR2','crmsfa')
await form.loginbutton()
await form.clickWelcome()
await form.clickAccount()
await form.ClickAccountCreate()
await form.Details()
await form.submitDetails()
await form.verify()
await form.closebrowser()
})



    
   
