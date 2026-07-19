import {test as basetest} from "@playwright/test"
import { Loginpage } from "../pages/loginPage"
import { WelcomePage } from "../pages/welcome"
import { Home } from "../pages/home"
import { CreateAccounts } from "../pages/createAccount"
import { AccountForm } from "../pages/accountForm"
import { VerifyLead } from "../pages/verify"

type myfixture ={
    loginfix :Loginpage
    welfix: WelcomePage
    homefix:Home
    createfix:CreateAccounts
    accfix:AccountForm
    verifyfix:VerifyLead
}

export const test1 = basetest.extend<myfixture>({
    loginfix:async({page},use)=>{
        const lop= new Loginpage(page)
        await use(lop)
    },
    welfix:async({page},use)=>{
        const wp= new WelcomePage(page)
        await use(wp)
    },
    homefix:async({page},use)=>{
        const hp= new Home(page)
        await use(hp)
    },
    createfix:async({page},use)=>{
        const cr= new CreateAccounts(page)
        await use(cr)
    },
    accfix:async({page},use)=>{
        const af= new AccountForm(page)
        await use(af)
    },
    verifyfix:async({page},use)=>{
        const vp = new VerifyLead(page)
        await use(vp)
    }

})

//Customfixture.spec.ts
import { test1 } from "../Utilits/CustomFixtures";
import dotenv from 'dotenv'
dotenv.config({path:'Data/prod.env'})
test1('Create lead using POM',async({verifyfix})=>{
await verifyfix.loginURL(process.env.L_URL as string)
await verifyfix.loginDetails(process.env.L_UserName as string, process.env.L_Password as string)
await verifyfix.loginbutton()
await verifyfix.clickWelcome()
await verifyfix.clickAccount()
await verifyfix.ClickAccountCreate()
await verifyfix.Details()
await verifyfix.submitDetails()
await verifyfix.verify()
})




