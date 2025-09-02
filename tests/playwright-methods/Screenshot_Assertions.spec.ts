import {test, expect} from '@playwright/test';

test('Screenshot Assertions', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveScreenshot({fullPage: true});
    await page.locator('button[type="submit"]').click()
    await expect(page).toHaveScreenshot('error.png');
});