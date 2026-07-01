import {test, expect} from "@playwright/test"

import path from 'path'

test('Learn file upload using input<type=file>', async ({page}) => {

await page.goto('https://www.leafground.com/file.xhtml')

let fileupload=page.locator('(//input[@type="file"])[2]')

fileupload.setInputFiles([
        path.join(__dirname, "../../utils/Qeagle.png"),
        path.join(__dirname, "../../utils/Testleaf.png")
    ]);

})

