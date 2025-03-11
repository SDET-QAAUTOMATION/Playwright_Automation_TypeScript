import { test, expect } from '@playwright/test';

test('playwright built-in locatos - getBytext()', async({page})=> {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.waitForTimeout(2000);
    console.log('getText1 : '+await page.getByText('Log in').first().textContent());
    console.log('getText2 : '+await page.getByText('Log').first().textContent());
    console.log('getText3 : '+await page.getByText('Log in', {exact: true}).first().textContent());
    console.log('getText4 : '+await page.getByText('Log', {exact: true}).first().textContent());
});