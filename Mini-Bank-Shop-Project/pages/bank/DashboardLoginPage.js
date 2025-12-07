import { expect } from '@playwright/test';

export class DashboardLoginPage {
    constructor (page) {
    this.page = page;
    this.overview = page.getByRole('heading', {name: /overview/i });

    //Transaction and Deposit
    this.startTransaction = page.getByRole('button', {name: /start a transaction/i});
    this.makeDeposit = page.locator('//a[@href="/dashboard/deposit"]');
    this.bankTransfer = page.getByText('Bank Transfer');
    this.enterAmount = page.getByRole('textbox', {name: /amount/i});
    this.step3Continue = page.locator('//button[text()="Step 3 - Continue"]');
    this.successToaster = page.getByText(success|deposited/i);
    this.Dashboard = page.locator('//a[@href="/dashboard"]');
    
    }

    async assertLoaded () {
        await expect(this.page).toHaveURL('https://mini-bank.testamplify.com/dashboard');
        await expect(this.overview).toBeVisible();
    }

    async makeDeposit () {
        await this.startTransaction.click();
        await this.makeDeposit.click();
        await expect(this.page).toHaveURL('https://mini-bank.testamplify.com/dashboard/deposit');
        await this.bankTransfer.click();
        await this.enterAmount.fill(String(amount));
        await this.step3Continue.click();
        await this.successToaster.toBeVisible();
        await this.Dashboard.click();
    }

}