
import test from "@playwright/test";
test("DropDowns", async ({page}) => {
await page.goto("https://www.leafground.com/select.xhtml")
//dropdown
const dropDown=page.locator('//select[@class="ui-selectonemenu"]/option') 
const DDcount=await dropDown.count() 
console.log(`the no of values in the dropdown ${DDcount}`);
let index=0;
while( index < DDcount){
console.log(await dropDown.nth(index).innerText()) 
 index++;
}
/* for(let index=0;index<DDcount;index++){
   console.log(await dropDown.nth(index).innerText()) 
} */

})
