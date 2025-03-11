import { test, expect } from '@playwright/test';

test('Playwright Auto-waits & Explicit waits', async({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Explicit wait - static wait
    // await page.waitForTimeout(2000);
    // await page.waitForSelector('[type="submit"]', {timeout: 10000})  //wait for an element
    await page.waitForLoadState('networkidle');

    //auto-waits - Automatically waits for button to be visible & enabled.
    //By defaullt 4-5 section waits for the element before interacting or clicking on it.
    // await page.locator('[type="submit"]').click();
    // await page.click('[type="submit"]');
    await expect(page.locator('h5')).toHaveText('Login');
    await page.locator('[name="username"]').fill('Admin');

    // Explicit waits

    // auto-waits - By default Playwright will have it, playwright automatically handles waiting for elements
                //   - for click, fill, expect, navigation

    // Explicit waits: use them when necessary, such as AnimationPlayState, dynamic ContentVisibilityAutoStateChangeEvent, network respones etc
                    //  - waitforSelector(), WaitforTimeout()


});