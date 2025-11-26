import { test, expect } from '@playwright/test';
import { urls, creds } from '../test-data/credentials';
import { LoginPage } from '../pages/day19-login.page';

test('Day 18 - Screenshots and Videos', async ({ page }) => {

  console.log('Step 1: Go to the Mini-Bank Website');
  await page.setViewportSize({ width: 1920, height: 1080 });

  const login = new LoginPage(page);

  // Navigate using POM
  await login.goto(urls.login);

  console.log('Step 2: Login');

  // Wait for elements on the login page
  await login.assertLoaded();

  // Login using POM method
  await login.login(creds.valid.username, creds.valid.password);

  console.log('Step 3: Wait For Dashboard');
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveURL(urls.dashboard);

  console.log('Step 4: Navigate to Transactions')
  const TransactionBtn = page.getByRole('link', { name: 'Transactions' });
  await TransactionBtn.click();
  await expect(page).toHaveURL('https://mini-bank.testamplify.com/dashboard/transactions');

  console.log('Step 5: Take screenshot of Transactions');
  await page.screenshot({
      path: 'test-results/day18-transaction-screenshot.png',
      fullPage: true,
  });

  console.log('✅ Successful Transactions Page Screenshot');

});
