import { test, expect } from '@playwright/test';

test('', async ({ page }) => {
//1. Go to the Orange HRM Website
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log('✅ Successfully navigated to website');

//2. Login to Website
    const userName = page.locator("//input[@placeholder='Username']");
    const Passwrd = page.locator("//input[@placeholder='Password']");

    //Enter in Username and expect username to be entered
    await userName.fill('Admin');
    await expect(userName).toBeVisible();
    console.log('✅ Successfully entered in username');

    //Enter in Password and expect password to be entered
    await Passwrd.fill('admin123');
    await expect(Passwrd).toBeVisible();
    console.log('✅ Successfully entered in password');

    //Login
    const loginbutton = page.locator("//button[@type='submit']");
    await loginbutton.click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    console.log('✅ Successfully logged in!')

    //Logout
    const logoutBtn = page.getByRole('menuitem', { name: 'Logout' });
    const logoutDropdown = page.locator("//span[@class='oxd-userdropdown-tab']");
    await logoutDropdown.click();
    await page.waitForTimeout(500);
    await logoutBtn.click();
    console.log('✅ Clicked on the user dropddown and logout button')

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log('✅ Successfully logged out')
})