import { expect } from '@playwright/test';
import { urls, creds } from '../test-data/credentials';

export class TransferPage {
    constructor(page){
        this.page = page;
        this.transactionBtn = page.getByRole('button', {name: /Start a transaction/i });
        this.transferBtn = page.locator('//a[@href="/dashboard/transfer"]');
        this.transferMoneyBtn = page.getByRole('link', { name: 'Transfer Money' });
    }

  async startTransfer() {
    await this.transactionBtn.click();
    await this.transferMoneyBtn.click();
    await expect(this.page).toHaveURL(/dashboard\/transfer/);
}
    }