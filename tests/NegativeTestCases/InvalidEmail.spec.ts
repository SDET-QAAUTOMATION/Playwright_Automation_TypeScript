import { test, expect } from '@playwright/test';

test('Invalid Email', async ({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('[type="submit"]')).toBeVisible();
    await page.locator('[placeholder="Username"]').fill('Test#User');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('[type="submit"]').click()
    const getErrorTextMessage = await page.locator('.oxd-alert-content-text').textContent();
    expect(getErrorTextMessage).toEqual('Invalid credentials');
});