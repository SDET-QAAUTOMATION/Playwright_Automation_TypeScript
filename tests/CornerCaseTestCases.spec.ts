import { test, expect } from '@playwright/test';

/*
Corner case test cases:

    1. Login to Application with special characters in Username & Password [$#@#$$]
    2. Login with Long username and password [ characters length should allow min:5, max: 14]
              [till 60 characters]
    3. Login with spaces before and after Credentials 

*/

test('Corner Case Test Cases', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);
    await page.locator('[name="username"]').fill(" Admin ")
    await page.locator('[name="password"]').fill(" Admin ")
    await page.locator('[type="submit"]').click();
    // await page.pause();
    await expect(page.locator("p.oxd-alert-content-text")).toHaveText('Invalid credentials');
});