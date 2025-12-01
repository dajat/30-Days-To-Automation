import { expect } from '@playwright/test';
import { urls, creds } from '../test-data/credentials.js';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByLabel(/email/i).or(page.getByPlaceholder(/you@example\.com/i));
    this.password = page.getByLabel(/password/i).or(page.getByPlaceholder(/enter your password/i));
    this.signinBtn = page.getByRole('link', { name: /sign in/i })
    this.loginBtn = page.getByRole('button', { name: /submit/i})
  }
//Expect for login button to be visible method
  async assertLoaded() {
    await expect(this.signinBtn).toBeVisible();
  }
//Log In with Valid credentials and take screenshot
  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
    await expect(this.page).toHaveURL(urls.dashboard)
  }
}