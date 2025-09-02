import {test, expect} from '@playwright/test';

test('Playwright Locator Strategies', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    //Here we are learning CSS selector strategy

    // 1. By ID - #id
    expect(await page.locator('#login-button')).toBeVisible();

    //2. By Any of the Attribue - [attribute=value]
    await page.locator('input[placeholder="Username"]').fill('standard_user');
    await page.waitForTimeout(2000);
    await page.locator('input[name="password"]').fill('secret_sauce');

    //3. By Class - Tagname.class
    await page.locator('input.submit-button').click();

    //4. Parent Child - parent > child or parent child
    expect(await page.locator('div.header_secondary_container span[data-test="title"]')).toHaveText('Products');
    await page.waitForTimeout(2000);

    //5. nth child
    await page.locator('.inventory_item:first-child button').click();
    await page.waitForTimeout(2000);

    //6. Parent child - Parent > child > sub-child
    await page.locator('#shopping_cart_container > .shopping_cart_link >  .shopping_cart_badge').click();
    expect(await page.locator('div.cart_quantity')).toHaveText('1');
    await page.waitForTimeout(2000);

    //7. using :has for parent selection
    await page.locator('button:has-text("Checkout")').click();
    await page.waitForTimeout(2000);

    //8. Placehoder text, get by role text
    await page.getByPlaceholder('First Name').fill('Sneha');
    await page.getByPlaceholder('Last Name').fill('Chk');
    await page.getByPlaceholder('Zip/Postal Code').fill('74010');
    await page.getByRole('button', {name: 'Continue'}).click();
    await page.waitForTimeout(2000);

    //9. Sibbling selector
    await page.locator('button.btn_secondary + button').click();
    await page.waitForTimeout(2000);
    expect(await page.locator('h2.complete-header')).toHaveText('Thank you for your order!');
    await page.locator('#back-to-products').click();

    // 10. using *, ^, $ for attribute value matching
    //button[class="btn btn_primary btn_small btn_inventory "]  - any of the attribute value
    //button[class^="btn btn_primary"] - starts with ^
    // button[class*="btn_primary"] - By * matches anything, contains
    //button[class$="btn_inventory "] - Ends with $
    



});