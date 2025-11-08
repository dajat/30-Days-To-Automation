// Importing test and assertions
import { test, expect } from '@playwright/test';
// Defining test name and waiting to navigate to webpage
test('Day 13 - Locators and Selectors Practice', async ({ page }) => {
    console.log("🚀 Starting Day 13 Locator Practice Test");
    await page.goto('https://mini-bank.testamplify.com');

    //Get By Role -- expect to see login button
    const loginButton = page.getByRole('button', {name: 'Login'});
    await expect(loginButton).toBeEnabled();
    console.log("✅ getByRole locator is working");

    //Get By Text -- verifying that text is visible on mainpage of website
    const headerText = page.getByText('Manage your finances seamlessly');
    await expect(headerText).toBeVisible();
    console.log("✅ getByText locator is working");

    //Get By Placeholder
    await loginButton.click();
    const username = page.getByPlaceholder('you@example.com');
    const password = page.getByPlaceholder('Enter your password');
    //awaiting for username and password to be visible
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    console.log("✅ getByPlaceholder locator is working");

    //Enter text in the username and password fields
    await username.fill('testuser2@yopmail.com');
    await password.fill('Pass2005#');

    //XPath Locator -- verifying and click on login button
    const loginBtnXPath = page.locator('//button[@type="submit"]');
    await loginBtnXPath.click();
    console.log("✅ XPath locator is working");
    //Verify that the overview text is visible after login
    const overview = page.locator('//h2[text()="Overview"]');
    await expect(overview).toBeVisible();

    //CSS Selector
    const balance = page.locator('flex justify-between items-center small.text-gray-400');
    await expect(balance).toBeVisible();
    console.log("✅ CSS locator is working");
});