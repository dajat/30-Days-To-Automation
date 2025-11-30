import { expect } from '@playwright/test';
import { urls } from '../test-data/credentials';

export class TransferPage {
    constructor(page){
        this.page = page;
        this.transactionBtn = page.getByRole('button', {name: /Start a transaction/i });
        this.transferBtn = page.locator('//a[@href="dashboard/transfer"]');
    }

    async assertLoaded() {
    await expect(this.transactionBtn).toBeVisible();
    await expect(this.transferBtn).toBeVisible();
    }
}