import { test, expect} from '@playwright/test';

test('empty required fields', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('.orangehrm-login-button')).toBeVisible();
    await page.locator('input.oxd-input[name="username"]').fill('');
    await page.locator('input.oxd-input[name="password"]').fill('');
    await page.locator('.orangehrm-login-button').click();
    await page.waitForTimeout(2000);
    const getUserErrorText = await page.locator('span.oxd-text').first().textContent();
    const getPasswordErrorText = await page.locator('span.oxd-text').last().textContent();
    expect(getUserErrorText).toEqual('Requis');
    expect(getPasswordErrorText).toEqual('Requis');
});