import { expect } from '@playwright/test';
import { urls } from '../test-data/credentials';

export class LandingPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page; //the driver

        // === Define Locators (elements we will interact with) ===
        this.heroHeading = page.getByRole('heading', { name: /manage your finances seamlessly/i });
        this.loginLink = page.getByRole('link', { name: /login/i });
        this.heroGetStarted = page.getByRole('link', { name: /get started/i }).first(); // first button (top)
        //this.lowerCtaGetStarted = page.getByRole('link', { name: /get started/i }).nth(1); // second button (bottom)
        this.lowerCtaGetStarted = page.locator("//button[contains(text(), 'Get started')]");
    }

    // === Page Actions ===
    async goto(url) {
        await this.page.goto(url);
    }

    // === Assertions ===
    async assertLoaded() {
        // Check that the main heading, navigation bar, and login link are visible
        await expect(this.heroHeading).toBeVisible();
        await expect(this.page.getByRole('navigation')).toBeVisible();
        await expect(this.loginLink).toBeVisible();
    }

    // === Click Actions ===
    async clickLogin() {
        await this.loginLink.click();
    }

    async clickHeroGetStartedAndBack() {
        await this.heroGetStarted.click();
        await expect(this.page).toHaveURL(urls.login);
        await this.page.goBack();
    }

    async clickLowerGetStartedAndBack() {
        await this.lowerCtaGetStarted.click();
        await expect(this.page).toHaveURL(urls.login);
        await this.page.goBack();
        await this.page.screenshot({ path: 'screenshots/landing.png' });
    }

}