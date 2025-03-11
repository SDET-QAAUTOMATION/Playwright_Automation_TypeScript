import { test, expect } from '@playwright/test';

test('playwright built-in locators - getByRole()', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);
    // await page.locator('button[type="submit"]').click()
    await page.getByRole('button', {name: " Login "}).click()
});