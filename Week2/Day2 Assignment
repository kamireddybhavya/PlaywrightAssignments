import { chromium, test, webkit } from "@playwright/test";

test("redbus", async () => {
const broswer = await chromium.launch({
  channel:'msedge'
 })
const broswerContext = await broswer.newContext()
const page = await broswerContext.newPage()
await page.goto("https://www.redbus.in");
await page.waitForTimeout(5000)
  console.log("Title:",await page.title())
  console.log("Url:",page.url())

//Webkit
const broswerInstance = await webkit.launch({
 })
const broswerCont = await broswerInstance.newContext()
const broswerpage = await broswerCont.newPage()
await broswerpage.goto("https://www.flipkart.com");
  console.log("Title:",await broswerpage.title())
  console.log("Url:",broswerpage.url())

}); 



/* Title: Bus Booking Online and Train Tickets at Lowest Price - redBus
Url: https://www.redbus.in/
Title: Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!
Url: https://www.flipkart.com/ */
