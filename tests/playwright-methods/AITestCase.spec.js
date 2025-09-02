const { test, expect } = require('@playwright/test');

test('Login to OrangeHRM and verify success', async ({ page }) => {
    // Navigate to OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Fill in username and password
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify successful login by checking for dashboard element
    await expect(page.locator('h6')).toHaveText('Dashboard');
});