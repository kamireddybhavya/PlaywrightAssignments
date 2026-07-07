import {test} from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

let values:any =parse(fs.readFileSync(path.join(__dirname,'../../utils/Testleaf.csv')),{columns:true,skip_empty_lines:true})


for(let cred of values){
    test(`DataParameterisationCSV ${cred.TestCaseId}`, async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
   await page.locator(`#username`).fill(cred.Username)
    await page.locator(`[name="PASSWORD"]`).fill(cred.Password)
    await page.locator(`[class="decorativeSubmit"]`).click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.locator(`text="Leads"`).click()
    await page.locator(`[href="/crmsfa/control/createLeadForm"]`).click()
    await page.locator(`//input[@id = "createLeadForm_companyName"]`).fill(cred.CompanyName)
    await page.locator(`(//input[@name="firstName"])[3]`).fill(cred.FirstName)
    await page.locator(`#createLeadForm_lastName`).fill(cred.LastName)
   await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:'Direct Mail'})
const dropdown =await page.locator(`//select[@id="createLeadForm_marketingCampaignId"]/option`)
   let count = await dropdown.count()
console.log(`the total value are ${count}`)
/* for(let index=0;index<count;index++){
console.log(await dropdown.nth(index).innerText())
} */
const options = await dropdown.all();
for (const option of options) {
    console.log(await option.innerText());
}
await page.selectOption(`//select[@id="createLeadForm_marketingCampaignId"]`,'DEMO_MKTG_CAMP')
await page.selectOption(`//select[@id="createLeadForm_industryEnumId"]`,{index:5})
await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,"INR")

await page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`,{label:'India'})
await page.waitForTimeout(4000)
const states = await page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]/option`)
let TotalStates = await states.count()
console.log(`the total value are ${TotalStates}`)
let statevalues = await states.allTextContents()
for(let statesnames of statevalues ){
console.log(statesnames)
}

await page.selectOption(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`,{label:'ANDHRA PRADESH'})

await page.locator(`[name="submitButton"]`).click()
})
}
