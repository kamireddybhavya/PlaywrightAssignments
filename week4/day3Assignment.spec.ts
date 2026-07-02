import {test, expect} from "@playwright/test"

import path from 'path'
test.use({
   storageState:'Data/salesforcelogin.json' 
})

test('file upload Salesforce', async ({page}) => {

// await page.goto('https://login.salesforce.com/?locale=in')
// await page.locator(`#username`).fill(`bhavyakamireddy18.fed95511734a@agentforce.com`)
// await page.locator(`#password`).fill(`salesforce@2026`)
// await page.locator(`[name="Login"]`).click()
await page.goto("https://orgfarm-3450f8b108-dev-ed.develop.lightning.force.com/lightning/page/home")
await page.locator(`[title="App Launcher"]`).click()
await page.getByLabel('View All Applications').click()
await page.getByRole('combobox',{name:"Search apps or items..."}).fill('Accounts')
//await page.keyboard.press("Enter")
await page.click(`//mark[text()='Accounts']`)
await page.click(`//div[@title="New"]`)
await page.locator(`//input[@name="Name"]`).fill(`Bhavya`)
await page.getByRole("combobox", { name: "Rating" }).click();
await page.getByTitle("Warm").click();
await page.getByRole("combobox", { name: "Type" }).click();
await page.getByTitle("Prospect").click();
await page.getByRole("combobox", { name: "Industry" }).click();
await page.getByTitle("Banking").click();
await page.getByRole("combobox", { name: "Ownership" }).click();
await page.getByTitle("Public").click();
await page.click(`(//button[text()="Save"])[2]`)
await expect(page.getByText(`Bhavya`).first()).toBeVisible()//error
let fileupload= page.locator(`//input[@type="file"]`)
fileupload.setInputFiles( path.join(__dirname, "../../utils/Testleaf.png"))
await page.click(`//span[text()="Done"]`)
await expect(page.locator("body")).toContainText("Testleaf");

})
