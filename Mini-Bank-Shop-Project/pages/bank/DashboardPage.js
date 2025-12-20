import { expect } from '@playwright/test';
import { deposits } from '../../test-data/deposits';

export class DashboardPage {
  constructor(page) {
    this.page = page;

    // Transaction & Deposit
    this.startTransaction = page.getByRole('button', { name: 'Start a transaction' });
    this.depositLink = page.locator('//a[@href="/dashboard/deposit"]');
    this.bankTransfer = page.getByText('Bank Transfer');
    this.enterAmount = page.getByPlaceholder('Enter here');
    this.step3Continue = page.getByRole('button', {name: 'Step 3 — Continue' });
    this.successToast = page.getByText(/success/i);
    this.dashboardLink = page.locator('//a[@href="/dashboard"]');
    this.amt = deposits
  }

  async assertLoaded() {
    await expect(this.page).toHaveURL(/\/login$/);
  }

  async makeDeposit(amount) {
    await expect(this.startTransaction).toBeVisible();
    await this.startTransaction.click();
    await this.depositLink.click();
    await expect(this.page).toHaveURL(/\/dashboard$/); ///deposit$/
    await this.bankTransfer.waitFor({ state: 'visible' });
    await this.bankTransfer.click();
    await this.enterAmount.waitFor({ state: 'visible' });
    await this.enterAmount.fill(String(amount));
    await this.step3Continue.click();

    await expect(this.successToast.first()).toBeVisible();
    await this.dashboardLink.nth(3).click();
  }
 
}
