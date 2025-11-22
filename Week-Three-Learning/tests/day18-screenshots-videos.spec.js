import { test, expect } from '@playwright/test';

test('Day 17 - Waits and Timeouts', async ({ page }) => {
console.log('Step 1: Go to the Mini-Bank Website');
await page.setViewportSize({ width: 1920, height: 1080 });
await page.goto('https://mini-bank.testamplify.com/login');
await expect(page).toHaveURL('https://mini-bank.testamplify.com/login');

console.log('Step 2: Login');
const email = page.locator("//input[@placeholder='you@example.com']")
await email.fill('testuser2@yopmail.com');

const password = page.locator("//input[@placeholder='Enter your password']");
await password.fill('Pass2005#');

const loginBtn = page.locator("//button[@type='submit']");
await loginBtn.click();

console.log('Step 3: Wait For Dashboard');
await page.waitForLoadState("networkidle");
await expect(page).toHaveURL('https://mini-bank.testamplify.com/dashboard');

console.log('Step 4: Navigate to Transactions')
await page.waitForLoadState("networkidle");
const TransactionBtn = page.getByRole('link', { name: 'Transactions' });
await TransactionBtn.click();
await expect(page).toHaveURL('https://mini-bank.testamplify.com/dashboard/transactions');

console.log('Step 5: Take screenshot of Transactions');
await page.screenshot({
    path: 'test-results/day18-transaction-screenshot.png', fullPage: true, //manually taking a screenshot
    path: 'test-results/day18-balances-screenshot.png', fullPage: true,
})

console.log('✅ Successful Transactions Page Screenshot');

});