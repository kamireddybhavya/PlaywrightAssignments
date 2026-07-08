import {test} from'@playwright/test'
import login from '../../utils/login.json'
test.describe.serial('running in serial mode',()=>{
for(let value of login){
    test(`Salesforce Json ${value.TestcaseId}`,async({page})=>{
        await page.goto(`https://login.salesforce.com/?locale=in`)
        await page.locator(`#username`).fill(value.Username)
        await page.locator(`#password`).fill(value.Password)
        await page.locator(`#Login`).click()
    })
}
})

/* [
{
"TestcaseId":"TC001",
"Username":"dilipkumar.rajendran@testleaf.com",
"Password":"TestLeaf@2025"
},
{
"TestcaseId":"TC002",
"Username":"yuvarani.sekar@testleaf.com",
"Password":"Testleaf@2027"
}
]
 */
