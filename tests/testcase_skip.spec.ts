import { test, expect } from '@playwright/test';

test.only('skip and only test cases - 1', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page.locator('h5')).toHaveText('Login')
});

test('skip and only test cases - 2', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page.locator('[type="submit"]')).toBeVisible();
});

test.only('skip and only test cases - 3', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('.orangehrm-login-forgot-header').click();
    await expect(page.locator('.orangehrm-forgot-password-button--reset')).toBeVisible();
});