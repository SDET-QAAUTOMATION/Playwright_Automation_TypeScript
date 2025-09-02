import { test, expect } from '@playwright/test';

test('Login to Sauce Demo and verify success', async ({ page }) => {
    // Navigate to Sauce Demo login page
    await page.goto('https://www.saucedemo.com/');

    // Fill in username and password
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');

    // Click the login button
    await page.click('[data-test="login-button"]');

    // Verify successful login by checking for the products page title
    await expect(page.locator('.title')).toHaveText('Products');
});

test('Add a product to cart after login', async ({ page }) => {
    // Navigate to Sauce Demo login page
    await page.goto('https://www.saucedemo.com/isdfgff');

    // Fill in username and password
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');

    // Click the login button
    await page.click('[data-test="login-button"]');

    // Click "Add to cart" for the first product
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    // Verify the cart badge shows 1 item
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});

test('Logout after login', async ({ page }) => {
    // Navigate to Sauce Demo login page
    await page.goto('https://www.saucedemo.com/');

    // Fill in username and password
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');

    // Click the login button
    await page.click('[data-test="login-button"]');

    // Open the menu and click logout
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    // Verify redirected to login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});