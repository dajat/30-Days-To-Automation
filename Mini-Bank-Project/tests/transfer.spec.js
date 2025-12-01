import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { LoginPage } from '../pages/login.page';
import { TransferPage } from '../pages/transfer.page';
import { urls, creds } from '../test-data/credentials';

test('Start A Transaction - Transfer Money', async ({ page }) => {
    const transfer = new TransferPage(page);
    const landing = new LandingPage (page);
    const login = new LoginPage (page);
    console.log('✅ 1. Navigate to website');

    await landing.goto(urls.home);
    await landing.clickLogin();
    await login.assertLoaded();
    console.log('✅ 2. Verify that the page is visible');

    await login.login(creds.valid.email, creds.valid.password);
    await expect(page).toHaveURL('https://mini-bank.testamplify.com/dashboard');
    await transfer.transactionBtn.click();
    await transfer.transferMoneyBtn.click();
    await expect(page).toHaveURL('https://mini-bank.testamplify.com/dashboard/transfer');
    console.log('✅ 3. Login to website and navigate to Transfer Page')

    await page.screenshot({ path: 'Transfer-page.png', fullPage: true });
    console.log('✅ 4. Screenshot of Transfer Page');
    
});