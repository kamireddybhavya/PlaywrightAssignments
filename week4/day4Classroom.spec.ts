import {test} from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

let values:any =parse(fs.readFileSync(path.join(__dirname,'../../utils/loginData.csv')),{columns:true,skip_empty_lines:true})


for(let cred of values){
    test(`DataParameterisationCSV ${cred.TestCaseId}`, async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main")
   await page.locator(`#username`).fill(cred.Username)
    await page.locator(`[name="PASSWORD"]`).fill(cred.Password)
    await page.locator(`[class="decorativeSubmit"]`).click()
    await page.locator(`text='CRM/SFA'`).click()
})
}
