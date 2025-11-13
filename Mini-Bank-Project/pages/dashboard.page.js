import { expect } from '@playwright/test'
import { urls } from '../test-data/credentials'

export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.email = page.getByLabel(/email/i).or(page.getByPlaceholder(/you@example\.com/i));
        this.password = page.getByLabel(/password/i).or(page.getByPlaceholder(/enter your password/i));
        this.loginBtn = page.getByRole('button', {name: /^login$/i});
        this.accountBtn = page.getByText('Accounts', {exact: true}); //do not include assertions for locators
        this.dashboardBtn = page.getByText('Dashboard', {exact: true});
        this.searchInput = page.getByPlaceholder(/search/i).or(page.getByRole('searchbox'));
        this.accountNumber = page.locator('p.truncate.flex-shrink.min-w-0').filter({ hasText: /^\d+$/ });
    }

    async goto(url) {
    await this.page.goto(url);
  }

    async assertLoaded() {
        await expect(this.loginBtn).toBeVisible();
    }

    async clickLogin() {
        await this.loginBtn.click();
}

//Verifying login
    async login(email, pwd) {
        await this.email.fill(email);
        await this.password.fill(pwd);
        await this.loginBtn.click();

//Waiting for page to have the correct url
        await expect (this.page).toHaveURL(urls.dashboard);
    }

//Take Screenshot
        async screenshot(name = 'search-account.png') {
        await this.page.screenshot({ path: `screenshots/${name}`, fullPage: true });
    }}