import { test, expect } from '@playwright/test';

test('Text validations with Locator - 1', async({page})=> {
    await page.goto('https://in.search.yahoo.com/');
    await page.waitForTimeout(2000);
    await expect(page.locator('#top div.compTitle h3.title:has-text("Good evening!")')).toBeVisible();
    const getText = await page.locator('#top div.compTitle h3.title:has-text("Good evening!")').textContent();
    console.log('print Text : '+getText);
    await expect(getText).toEqual('Good evening!')
});

test('Text validations with Locator - 2', async({page})=> {
    await page.goto('https://in.search.yahoo.com/');
    await page.waitForTimeout(2000);
    await expect(page.locator('#top div.compTitle h3.title').first()).toBeVisible();  //first elements
    const getText = await page.locator('#top div.compTitle h3.title').first().textContent(); //returns first element text content
    console.log('print First Element Text : '+getText);
    await expect(getText).toEqual('Good evening!')
});