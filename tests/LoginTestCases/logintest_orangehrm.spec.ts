import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Login test - OrangeHRM', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('button[type="submit"]').click()
    await page.waitForTimeout(2000);
    await expect(page.locator('h6.oxd-text')).toBeVisible();
    await expect(page.locator('div.oxd-brand-banner')).toBeVisible();
});