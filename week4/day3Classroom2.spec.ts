import {test, expect} from "@playwright/test"
test('Learn file upload using input<type=file>', async ({page}) => {

await page.goto('https://the-internet.herokuapp.com/download')

    const filedown = page.waitForEvent('download') 
 await page.getByText('background.jpg',{exact:true}).click()
    const fdown = await filedown
await fdown.saveAs(`downloads/${fdown.suggestedFilename()}`) 
expect (fdown).toBeTruthy()
expect(fdown.suggestedFilename()).toContain('background')
})
