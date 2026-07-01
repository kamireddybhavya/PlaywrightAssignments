import {test} from 'playwright/test'
test('Nested FrameObject ', async({page})=>{
await page.goto(`https://www.leafground.com/frame.xhtml`)
const frameref =  page.frame({url:`https://www.leafground.com/framebutton.xhtml`})
const beforeclick = await frameref?.locator(`#Click`).innerText()
console.log(beforeclick)
await frameref?.locator(`#Click`).click()
console.log(await frameref?.locator(`#Click`).innerText())
})
