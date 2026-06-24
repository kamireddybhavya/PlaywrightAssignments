import{test} from '@playwright/test';
test('TestLeaf Login', async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator(`#username`).fill(`democsr2`)
    await page.locator(`[name="PASSWORD"]`).fill(`crmsfa`)
    await page.locator(`[class="decorativeSubmit"]`).click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.context().storageState({path:'data/state.json'})
    await page.waitForTimeout(3000)
})

//skiplogin.spec.ts
import {test, expect} from "@playwright/test"
test.use({
   storageState:'Data/state.json' 
})
test('Testleaf login', async ({page}) => {
await page.goto("https://leaftaps.com/crmsfa/control/main")
await expect(page.locator(`//a[text()='Leads']`)).toBeVisible();
await page.locator(`//a[text()='Leads']`).click()
})
