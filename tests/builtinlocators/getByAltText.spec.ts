import { test, expect } from '@playwright/test';

test('playwright built in locator - getByAltText()', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await page.getByAltText('client brand banner').click()
    // await page.locator('img[alt="client brand banner"]').click()
    const getText = await page.getByText('Book a Free Demo').first();
    await expect(getText).toHaveText('Book a Free Demo');
});