import { test, expect } from '@playwright/test';
import { BankLoginPage } from '../pages/bank/BankLoginPage.js';
import { DashboardLoginPage } from '../pages/bank/DashboardLoginPage.js';
import { bankUsers } from '../test-data/credentials.js';

test('Bank – login and verify transactions (POM)', async ({ page }) => {
  // Login
  const login = new BankLoginPage(page);
  await login.goto();
  await login.login({ email: bankUser.email, password: bankUser.password });


  // Dashboard checks
  const dashboard = new DashboardPage(page);
  await dashboard.assertLoaded();

  // Go to transactions and wait for amounts to load
  await dashboard.openTransactions();
  await dashboard.waitForAmounts();

  // Optional extra assertion
  await expect(page.getByRole('heading', { name: /transactions/i })).toBeVisible();
});

test.describe('Mini Bank – Data Driven Login', () => {
  for (const u of bankUsers) {
    test(`login test for ${u.email}`, async ({ page }) => {
      const login = new BankLoginPage(page);
      await login.goto();
      await login.login({ email: u.email, password: u.password });

      if (u.expectSuccess) {
        const dash = new DashboardLoginPage(page);
        await dash.assertLoaded();
      } else {
        await expect(page).toHaveURL(/\/login/);
      }
    });
  }
});