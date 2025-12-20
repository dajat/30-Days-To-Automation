import { expect } from '@playwright/test';
import { deposits } from '../../test-data/deposits';

export class DashboardPage {
  constructor(page) {
    this.page = page;

    // Transaction & Deposit
    this.startTransaction = page.getByRole('button', { name: /start a transaction/i});
    this.depositLink = page.locator('//a[@href="/dashboard/deposit"]');
    this.bankTransfer = page.getByText('Bank Transfer');
    this.enterAmount = page.locator('//input[@type="number"]');
    this.step3Continue = page.getByRole('button', {name: 'Step 3 — Continue' });
    this.successToast = page.getByText(/success/i);
    this.dashboardLink = page.locator('//a[@href="/dashboard"]');
    this.amt = deposits
  }

  async assertLoaded() {
    await expect(this.page).toHaveURL(/\/login$/);
  }

  async makeDeposit() {
    await this.startTransaction.click();
    await this.depositLink.click();

    await expect(this.page).toHaveURL(/\/dashboard\/deposit$/);
    if (amt === undefined) {
    throw new Error('Deposit amount is undefined');
  }
    await this.bankTransfer.click();
    await this.enterAmount.string(amt);
    await this.step3Continue.click();

    await expect(this.successToast).toBeVisible();
    await this.dashboardLink.click();
  }
 
}
