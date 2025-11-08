// Test and expect used to run a PlayWright environment. All test are written in this test block.
const { test, expect } = require('@playwright/test');
test('comprehensive locator strategies', async ({ page }) => {
    console.log('=== Playwright Locator Strategies ===');
    await page.goto('https://mini-bank.testamplify.com/');

      //1. Get By Role
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeEnabled();
    console.log('✅ Role locators working');
});

