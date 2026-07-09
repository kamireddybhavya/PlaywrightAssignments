import {test} from '@playwright/test'
import dotenv from 'dotenv'

const Filename = process.env.envFile || 'qa' || 'prod'
dotenv.config({path:`utils/${Filename}.env`})
test('Multiple Env Files',async({page})=>{
await  page.goto(process.env.L_URL as string )
await page.locator(`#username`).fill(process.env.L_UserName as string)
await page.locator('#password').fill(process.env.L_Password as string)
await page.locator('#Login').click()
})


/* qa.env
L_URL=https://login.salesforce.com/?locale=in
L_UserName=dilipkumar.rajendran@testleaf.com
L_Password=TestLeaf@2025
prod.env
L_URL=https://login.salesforce.com/?locale=in
L_UserName=dilipkumar.rajendran@testleaf.com
L_Password=TestLeaf@2025 */
