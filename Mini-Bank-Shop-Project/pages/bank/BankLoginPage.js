import { expect } from '@playwright/test';

export class BankLoginPage {
    constructor (page) {
    this.page = page;
    this.loginBtn = page.locator('//a[@href="/login"]');
    this.email = page.locator('//input[@placeholder="you@example.com"]');
    this.password = page.locator('//input[@placeholder="Enter your password"]');
    this.login = page.locator('//button[@type="submit"]');

    }

    //Async Go To
async goto () {
    await this.page.goto('https://mini-bank.testamplify.com/login');
    await expect(this.page).toHaveURL(/\/login$/);
    }

    //Logging Into Bank Account
async login ({email, password}) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.login.click()
    };
  }