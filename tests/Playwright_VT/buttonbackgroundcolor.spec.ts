import { test, expect } from '@playwright/test';

test('Playwright Visual Testing - Button Background Color', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForSelector('[type="submit"]');
    const loginButton = await page.locator('[type="submit"]')
    const color = await loginButton.evaluate(e1=> window.getComputedStyle(e1).backgroundColor);
    console.log('Login button BackGround Color is : '+color)
    expect(color).toBe('rgb(255, 123, 29)');
});