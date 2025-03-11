import { test, expect } from '@playwright/test';

test('Playwright buildin locator - getByLabel', async({page}) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.waitForTimeout(2000);
    await page.getByLabel('First name:').fill('Bangalore');
    // await page.getByLabel('Last name:').fill('Hyderabad');
    await page.locator('#LastName').fill('Hyderabad');
    // console.log('Wait for pause....')
    // await page.pause()
});