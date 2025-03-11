import { test, expect } from '@playwright/test';

test('Login Code', async({page})=> {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('#login-button')).toBeVisible();
    await page.locator('[name="user-name"]').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.waitForTimeout(2000);
    await expect(page.locator('span.title')).toBeVisible();
    await expect(page.locator('span.title')).toHaveText('Products');
});