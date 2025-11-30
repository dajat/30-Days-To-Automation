import { test } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { LoginPage } from '../pages/login.page';
import { TransferPage } from '..pages/transfer.page';
import { urls } from '..test-data/credentials';

test(''), async ({ page }) => {
    const transfer = new TransferPage(page);
    const landing = new LandingPage (page);
    const login = new LoginPage (page);

    await landing.goto(urls.home);
    await landing.clickLogin();
    await login.assertLoaded();

    await login.login(creds.valid.email, creds.valid.password);
    await transactionBtn.click();
    
}