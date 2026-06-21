import {test,expect} from "@playwright/test"


test('Salesforce login', async ({page}) => {


await page.goto("https://login.salesforce.com/?locale=in")
await page.locator(`#username`).fill(`dilipkumar.rajendran@testleaf.com`)
//await page.locator(`.input.r4.wide.mb16.mt8.password`).fill(`TestLeaf@2025`)
await page.locator(`[class="input r4 wide mb16 mt8 password"]`).fill(`TestLeaf@2025`)
await page.locator(`[name="Login"]`).click()
//await expect(page).toHaveURL(/lightning/);
await expect(page.locator('.slds-icon-waffle')).toBeVisible({ timeout: 15000 });
await page.waitForTimeout(8000)
let pagetitle=await page.title()
console.log(pagetitle)

let pageurl=page.url()
console.log(pageurl);
await expect(page).toHaveTitle(`Home | Salesforce`)

})
