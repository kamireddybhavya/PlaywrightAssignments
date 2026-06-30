import {test} from "@playwright/test"


test("Learn alerts", async ({page}) => {


await page.goto("https://www.leafground.com/alert.xhtml")


page.on('dialog', async(alert)=>{
    console.log(alert.type())
    console.log(alert.message());
     //alert.accept()
   // alert.dismiss()
   let alertType=alert.type()
   switch(alertType){


    case "alert":
       alert.accept()
        break


    case "confirm":
       alert.dismiss()
        break
    case "prompt":
        alert.accept('Playwright')
        break
    default:
        alert.dismiss()
   }
})

//await page.locator('(//span[text()="Show"])[1]').click()
//await page.locator('(//span[text()="Show"])[2]').click()
await page.locator('(//span[text()="Show"])[5]').click()


await page.waitForTimeout(5000)
})
