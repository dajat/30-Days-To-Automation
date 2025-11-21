import { test, expect } from '@playwright/test';

test('Day 17 - Waits and Timeouts', async ({ page }) => {
console.log('Step 1: Navigate to the Mini-Bank Website');
await page.goto('https://mini-bank.testamplify.com/login');
await expect(page).toHaveURL('https://mini-bank.testamplify.com/login');

console.log('Step 2: Login to the account');
const email = page.locator("//input[@placeholder='you@example.com']")
await email.fill('testuser2@yopmail.com');

const password = page.locator("//input[@placeholder='Enter your password']");
await password.fill('Pass2005#');

const loginBtn = page.locator("//button[@type='submit']");
await loginBtn.click();

console.log('Step 3: Waiting For Dashboard to load');
await page.waitForLoadState("networkidle");
await expect(page).toHaveURL('https://mini-bank.testamplify.com/dashboard');

console.log('Step 4: Wait for transaction history to appear');
await page.waitForSelector("//h2[contains(.,'Recent Transactions')]");
const transactions = page.locator("//div[contains(@class,'transactions') or contains(.,'Deposit')]");
await expect(transactions.first()).toBeVisible();

console.log('STEP 5: Click "See All" to open All Transactions');
const seeAllButton = page.locator("//a[contains(.,'See All')]");
await seeAllButton.click();
await page.waitForURL("**/dashboard/transactions");
await expect(page).toHaveURL(/transactions/);

console.log("STEP 6: Wait for transactions to load");
await page.waitForSelector("//table[contains(.,'Personal') or //h2[text()='Withdrawal']]");
const amount = page.locator("//td[contains(.,'$')]");
await expect(amount.first()).toBeVisible(); //returns locator to first matching element
await expect(amount.first()).toContainText('$');

console.log("STEP 8: Click the Dashboard tab");
const DashboardButton = page.locator("//span[text()='Dashboard']");
await DashboardButton.click();

console.log('STEP 9: Validate that "Start a transaction" button is enabled');
const transactionButton = page.locator("//button[contains(.,'Start a transaction')]");
await expect(transactionButton).toBeEnabled();

console.log("✅ TEST COMPLETE: Page loaded properly and waits handled smoothly.");

});