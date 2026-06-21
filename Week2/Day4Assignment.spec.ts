//Assignment1
import {test, expect} from '@playwright/test'

test("Create Lead", async({page})=>{
await page.goto(" https://login.salesforce.com ")
await page.locator(`//input[@type="email"]`).fill(`dilipkumar.rajendran@testleaf.com`)
await page.locator(`//input[@type="password"]`).fill(`TestLeaf@2025`)
await page.locator(`//input[@id="Login"]`).click()
//await page.waitForTimeout(8000)
await page.locator(`[title="App Launcher"]`).click()
await page.locator(`//button[@class="slds-button"]`).click()
await page.locator(`//p[text()='Sales']`).click()
await page.locator(`(//span[text() = 'Leads'])[1]`).click()
await page.locator(`//div[@title="New"]`).click()
await page.locator(`(//button[@data-value="--None--"])[1]`).click()
await page.locator(`span:text("Ms.")`).click()
await page.locator(`[name="lastName"]`).fill(`Bhavya`)
await page.locator(`[name="Company"]`).fill(`TCS`)
await page.locator(`(//button[@class="slds-button slds-button_brand"])[3]`).click()
await expect(page.locator('lightning-formatted-name'))
      .toContainText('Ms.  Bhavya');
})

//Assignment2

import{test,expect} from '@playwright/test';
test('TestLeaf', async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator(`#username`).fill(`demoCSR2`)
    await page.locator(`[name="PASSWORD"]`).fill(`crmsfa`)
    await page.locator(`[class="decorativeSubmit"]`).click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.locator(`text="Leads"`).click()
    await page.locator(`[href="/crmsfa/control/createLeadForm"]`).click()
    await page.locator(`//input[@id = "createLeadForm_companyName"]`).fill(`Tcs`)
    await page.locator(`(//input[@name="firstName"])[3]`).fill(`Bhavya`)
    await page.locator(`#createLeadForm_lastName`).fill(`K`)
    await page.locator(`[class="smallSubmit"]`).click() 
    await page.locator(`//a[text()="Edit"]`).click()
    await page.locator(`#updateLeadForm_companyName`).fill(`Microsoft`)
    await page.locator(`[value="Update"]`).click()
})

//Assignment3

import {test,expect } from '@playwright/test'

test("Create Lead", async({page})=>{
await page.goto(" https://login.salesforce.com ")
await page.locator(`//input[@type="email"]`).fill(`dilipkumar.rajendran@testleaf.com`)
await page.locator(`//input[@type="password"]`).fill(`TestLeaf@2025`)
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`[title="App Launcher"]`).click()
await page.locator(`//button[@class="slds-button"]`).click()
await page.click(`//p[text()='Individuals']`)
await page.locator(`[class="slds-icon slds-icon-text-default slds-icon_xx-small"]`).nth(13).click()
await page.waitForTimeout(5000)
await page.locator(`//span[text()='New Individual']`).click()
await page.locator(`//input[@placeholder="Last Name"]`).fill(`Sita`)
await page.locator(`(//button[@title="Save"])[2]`).click()
await expect(page.locator('//span[@class="uiOutputText"]'))
      .toContainText('Sita');
    })

//Assignment4

import {test,expect } from '@playwright/test'

test("Create Lead", async({page})=>{
await page.goto(" https://login.salesforce.com ")
await page.locator(`//input[@type="email"]`).fill(`dilipkumar.rajendran@testleaf.com`)
await page.locator(`//input[@type="password"]`).fill(`TestLeaf@2025`)
await page.locator(`//input[@id="Login"]`).click()
await page.locator(`[title="App Launcher"]`).click()
await page.locator(`//button[@class="slds-button"]`).click()
await page.click(`//p[text()='Individuals']`)
await page.locator(`//span[text()='Individuals']`).click()
await page.locator('[aria-label="Search this list..."]')
          .fill(`Blake`);
await page.keyboard.press('Enter');
//await page.waitForTimeout(8000)
await page.click(`[title="Show 2 more actions"]`)
await page.click(`(//a[@class="highlightButton"])[1]`)
await page.click(`[class="select"]`)
await page.click(`[title="Mr."]`)
await page.locator(`[placeholder="First Name"]`).fill(`James`)
await page.click(`//span[text()='Save']`)


    })
