//StorageState.spec.ts
import{test,expect} from '@playwright/test';
test('TestLeaf', async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`#username`).fill(`democsr2`)
    await page.locator(`[name="PASSWORD"]`).fill(`crmsfa`)
    await page.locator(`[class="decorativeSubmit"]`).click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.context().storageState({path:'Data/TestLeaf.json'})
    await page.waitForTimeout(3000)
})

  //skipLogin.spec.ts
import {test,expect} from "@playwright/test"
test('Testleaf login', async ({page}) => {
await page.goto("https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL837479299289")
await page.locator(`//a[text()='Leads']`).click()
})

