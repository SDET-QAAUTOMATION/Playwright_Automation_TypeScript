import {test, expect} from '@playwright/test';

test.only('Verify page title', async({page})=> {
    await page.goto('https://in.search.yahoo.com/');
    await page.waitForTimeout(2000);
    await expect(page).toHaveTitle('Yahoo Search - Web Search');
    await expect(page).toHaveURL('https://in.search.yahoo.com/');
});