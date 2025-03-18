import { test, expect } from '@playwright/test';

test('Playwright Visual Testing - Compare snapshots - Failure test', async({page}) => {
    await page.goto('https://vclock.com/timer/');
    await page.waitForSelector('#btn-set-timer');
    expect(await page.screenshot()).toMatchSnapshot('FullPageDiff.png');
});