import { expect } from '@playwright/test';
import { urls } from '../test-data/credentials';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByLabel(/email/i).or(page.getByPlaceholder(/you@example\.com/i));
    this.password = page.getByLabel(/password/i).or(page.getByPlaceholder(/enter your password/i));
    this.loginBtn = page.getByRole('button', { name: /^login$/i });
    //this.anyError = page.getByText('Authentication failed: Invalid credentials');
  }
//Expect for login button to be visible method
  async assertLoaded() {
    await expect(this.loginBtn).toBeVisible();
  }
//Log In with Valid credentials and take screenshot
  async login(email, pwd) {
    await this.email.fill(email);
    await this.password.fill(pwd);
    await this.loginBtn.click();
    await expect(this.page).toHaveURL(urls.dashboard);
    await this.page.screenshot({ path: 'screenshots/dashboard.png' });
  }
//Log In with Invalid credentials
  async tryInvalidAttempts(cases) {
    for (const c of cases) {
      await this.email.fill(c.email);
      await this.password.fill(c.password);
      await this.loginBtn.click();
      await this.email.clear();
      await this.password.clear();
    }
  }
}