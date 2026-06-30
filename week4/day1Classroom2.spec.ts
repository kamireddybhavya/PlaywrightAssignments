import {expect, test} from '@playwright/test';
test('frames and alert',async({page})=>{
    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`)
    page.on('dialog',async(alert)=>{
        await alert.accept()

    })
    const frame = await page.frameLocator(`#iframeResult`)
    const Beforetext = await frame.locator(`//button[text()='Try it']`).innerText()
    console.log(Beforetext)
    await frame.locator(`//button[text()='Try it']`).click()
    await expect(frame.locator(`#demo`)).toHaveText(`You pressed OK!`)
    const aftertext = await frame.locator(`#demo`).innerText()
    console.log(aftertext)
})



