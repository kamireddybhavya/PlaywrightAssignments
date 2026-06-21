import{test,expect} from '@playwright/test';
test('TestLeaf', async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator(`#username`).fill(`demoCSR2`)
    await page.locator(`[name="PASSWORD"]`).fill(`crmsfa`)
    await page.locator(`[class="decorativeSubmit"]`).click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.locator(`text="Leads"`).click()
    await page.locator(`[href="/crmsfa/control/createLeadForm"]`).click()
    await page.locator(`[name="companyName"]`).last().fill(`Tcs`)
    await page.locator(`[name="firstName"]`).nth(2).fill(`Bhavya`)
    await page.locator(`#createLeadForm_lastName`).fill(`K`)
    await page.locator(`[name="personalTitle"]`).fill(``)
    await page.locator(`[name="generalProfTitle"]`).fill(``)
    await page.locator(`#createLeadForm_annualRevenue`).fill(`4 Lakhs`)
    await page.locator(`#createLeadForm_departmentName`).fill(`Testing`)
    await page.locator(`[name="primaryPhoneNumber"]`).nth(3).fill(`123456`)
    await page.locator(`[class="smallSubmit"]`).click() 
 
})
