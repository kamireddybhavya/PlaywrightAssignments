//concurrent approach

import {test} from "@playwright/test"

test("concurrent way of handling windows", async({page,context}) => {

await page.goto("https://www.leafground.com/window.xhtml")

const [parentwindow]=await Promise.all([context.waitForEvent('page'),page.locator('//span[text()="Open Multiple"]').click()])

//[parentwindow]=parent page, child1 and child2

//print the array of pages
const count=parentwindow.context().pages() //array of pages

//length property to find the total no of pages

let windowlen=count.length
let dashboard:any
let webtable:any

for(let i=0;i<windowlen;i++){

    //await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(5000)

    const Title=await count[i].title()
    console.log(Title);//Window,Web Table,Dashboard
    

if(Title==="Dashboard"){
    dashboard=count[i]////we store that Page object in dashboard
     await page.waitForTimeout(5000)
    await dashboard.locator(`#email`).fill(`bhavyakamireddy18@gmail.com`)
    dashboard.close()
    await page.waitForTimeout(3000)
    await page.bringToFront()
    await page.locator("//span[text()='Open Multiple']").click();
}
}
})
