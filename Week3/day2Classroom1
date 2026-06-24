import { test, expect } from '@playwright/test';
test('Validates', async ({ page }) => {

  await page.goto('https://leafground.com/input.xhtml');
//await expect(page.locator(`[name="j_idt88:j_idt93"]`)).toBeDisabled()
await expect(page.getByPlaceholder(`Disabled`)).toBeDisabled()
const name = page.locator(`[name="j_idt88:name"]`)
await expect(name).toBeEditable()
await name.fill(`Bhavya`)
await expect.soft(page.locator(`[value="Chennai"]`)).toBeDisabled()
const textbox = page.locator(`[value="My learning is superb so far."]`)
await expect(textbox).toBeEnabled()
await textbox.fill(`Playwright Learnings`)
});
