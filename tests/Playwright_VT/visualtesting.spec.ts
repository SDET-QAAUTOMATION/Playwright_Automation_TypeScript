
/*
DEF: Visual Testing is a Software Testing Technique that verifies application visual appearance
ensuring elements like color, Space, fonts, images, layouts are displayed correctly or not,
and also checks consistently across different Devices, operation systems and browsers.
*/

import {test, expect} from '@playwright/test';

test('Visual Testing with Playwright - Screenshot comparison', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForSelector('[type="submit"]')
    expect(await page.screenshot()).toMatchSnapshot('FullPage.png');
});
