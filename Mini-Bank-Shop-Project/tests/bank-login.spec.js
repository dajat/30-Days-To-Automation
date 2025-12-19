import { test, expect } from '@playwright/test';
import { BankLoginPage } from '../pages/bank/BankLoginPage.js';
//import { DashboardPage } from '../pages/bank/DashboardLoginPage.js';
import { bankUsers } from '../test-data/credentials.js';

test.describe('Mini Bank – Data Driven Login', () => {
  for (const u of bankUsers) {
    test(`login test for ${u.email}`, async ({ page }) => {
      const loginPage = new BankLoginPage(page);
      await loginPage.goto();
      await loginPage({
        email: u.email,
        password: u.password,
      });

      if (u.expectSuccess) {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.assertLoaded();
      } else {
        await expect(page).toHaveURL(/\/login/);
      }
    });
  }
});
