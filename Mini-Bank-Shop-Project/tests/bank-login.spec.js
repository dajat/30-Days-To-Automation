// @ts-check
import { test, expect } from '@playwright/test';
import { BankLoginPage } from '../pages/bank/BankLoginPage.js';
import { DashboardLoginPage } from '../pages/bank/DashboardLoginPage.js';
import { bankUsers } from '../test-data/credentials.js';

test.describe('Bank - Login To Account', () => {

  for (const u of bankUsers) {
    test(`login test for ${u.email}`, async ({ page }) => {

      const login = new BankLoginPage(page);
      await login.goto();
      console.log('✅ Successful Navigation')

      if (u.expectSuccess) {
        const dash = new DashboardLoginPage(page);
        await dash.assertLoaded();
      } else {
        // Could check error message too
        await expect(page).toHaveURL(/\/login/);
        console.log('✅ Successful and Failed Login')
      }
    });
  }

});

