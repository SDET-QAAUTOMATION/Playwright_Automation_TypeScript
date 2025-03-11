import { test, expect } from '@playwright/test';

test('Built in Locator - getByPlaceholder', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);
    // await page.locator("[placeholder='Username']").fill('Admin')
    await page.getByPlaceholder('Username').fill('Admin-testuser')
    await page.screenshot({path: 'Screenshots/screenshot.png', fullPage: true});
    await page.waitForTimeout(2000);
});