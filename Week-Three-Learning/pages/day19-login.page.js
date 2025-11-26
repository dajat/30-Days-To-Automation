import { expect } from '@playwright/test'

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('//input[@placeholder="you@example.com"]');
    this.password = page.locator('//input[@placeholder="Enter your password"]');
    this.loginBtn = page.locator('//button[@type="submit"]');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async assertLoaded() {
    await expect(this.username).toBeVisible();
  }
};