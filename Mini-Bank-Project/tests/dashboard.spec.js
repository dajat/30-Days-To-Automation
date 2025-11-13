import { test } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { creds, urls } from '../test-data/credentials';

test('Dashboard page: navigation + assertions + actions', async ({ page }) => {
    const dashboard = new DashboardPage(page);

    await dashboard.goto(urls.dashboard);
    console.log('Go to the Mini Bank Website');

    await dashboard.assertLoaded();
    await dashboard.clickLogin();
    console.log('Page loads and Login button is clicked');

    await dashboard.login(creds.valid.email, creds.valid.password);
    console.log('Login with valid credentials and land on the Dashboard page');

    await dashboard.accountBtn.click();
    console.log('Click on the Account Tab')

    const accountNum = (await dashboard.accountNumber.textContent()).trim();
    console.log('Copy the Account Number:', accountNum);
    
    await dashboard.dashboardBtn.click();
    console.log('Go Back To Dashboard Successfully');

    await dashboard.searchInput.fill(accountNum);
    console.log('Added the Account Number in the Search Bar');

    await dashboard.screenshot('search-account.png');
    console.log('Screenshot taken saved successfully');
});