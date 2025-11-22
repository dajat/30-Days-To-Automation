import { test, expect } from '@playwright/test';

test('Day 17 - Waits and Timeouts', async ({ page }) => {
console.log('Step 1: Go to the Mini-Bank Website');
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

console.log('Step 4: Wait for transaction history');
await page.waitForSelector("//h2[contains(.,'Transactions')]");
const transactions = page.locator("//div[contains(@class,'Withdrawals') or contains(.,'Deposit')]");
await expect(transactions.first()).toBeVisible();

console.log('STEP 5: Click "See All" to see all Transactions');
const seeAllButton = page.locator("//a[contains(.,'See All')]");
await seeAllButton.click();
await page.waitForURL("**/dashboard/transactions");
await expect(page).toHaveURL(/transactions/);

console.log("STEP 6: Wait for transactions");
await page.waitForSelector("//table[contains(.,'General')]");
const amountNo = page.locator("//td[contains(.,'$')]");
await expect(amountNo.first()).toBeVisible(); //returns locator to first matching element
await expect(amountNo.first()).toContainText('$');

console.log("STEP 8: Click the on Dashboard tab");
const DashboardBtn = page.locator("//span[text()='Dashboard']");
await DashboardBtn.click();

console.log('STEP 9: Validate that "Start a transaction" button is enabled');
const transactionBtn = page.locator("//button[contains(.,'Start a transaction')]");
await expect(transactionBtn).toBeEnabled();

console.log("✅ TEST COMPLETE: Page loaded properly with waits.");

});