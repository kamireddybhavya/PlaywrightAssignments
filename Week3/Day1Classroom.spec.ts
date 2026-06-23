
import{test} from '@playwright/test';
test('ParaBank Application', async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await page.getByRole("link",{name:"Forgot login info?"}).click()
    await page.getByAltText(`ParaBank`).click()
    await page.getByText("Locations").nth(1).click()
    
    await page.getByRole("button").nth(1).click()
    await page.locator(`//input[@name="search"]`).fill('chennai')
})


