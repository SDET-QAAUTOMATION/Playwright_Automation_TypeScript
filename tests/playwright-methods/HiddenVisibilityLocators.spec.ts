import {test, expect} from '@playwright/test';

test('Understand Hidden and Visisbility locators', async ({page}) => {

    //page is an instance of the Playwright Page class
    // page provides all the methods you need to interact with the page.

    await page.goto('https://www.letskodeit.com/practice');
    expect(await page.locator('#hide-textbox')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await page.waitForTimeout(2000);
    expect(await page.getByPlaceholder('Hide/Show Example')).toBeHidden();
     await page.waitForTimeout(2000);
    await page.locator('input[value="Show"]').click();
     await page.waitForTimeout(2000);
    expect(await page.getByPlaceholder('Hide/Show Example')).toBeVisible();
});

test('Elements Disabled or Enabled test', async ({page}) => {
    await page.goto('https://www.letskodeit.com/practice');
    expect(await page.locator('input[placeholder="Enabled/Disabled Field"]')).toBeEnabled();
    await page.locator('input[placeholder="Enabled/Disabled Field"]').fill('Playwright Test');
    await page.waitForTimeout(2000);
    await page.locator('#disabled-button').click();
    expect(await page.locator('input[placeholder="Enabled/Disabled Field"]')).toBeDisabled();
    await page.locator('#enabled-button').click();
    expect(await page.locator('input[placeholder="Enabled/Disabled Field"]')).toBeEnabled();
});

test('Elements Attribute Verification test', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(2000);
    await expect(page.locator('input[placeholder="Username"]')).toBeVisible();
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('name', 'user-name');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('id', 'user-name');
    await expect(page.locator('input[placeholder="Password"]')).toHaveAttribute('name', 'password');
    await expect(page.locator('input[placeholder="Password"]')).toHaveAttribute('id', 'password');
});