import { test, expect } from '@playwright/test';

test('Mini-Shop Form Automation Test', async ({ page }) => {
//1. Go to Mini-Shop Website
await page.goto('https://mini-shop.testamplify.com/');
await expect(page).toHaveURL('https://mini-shop.testamplify.com/');
console.log('✅ Navigated to the website')

//2. Click on Products page
const miniShop = page.locator("//h1[text()='Mini shop']");
await expect(miniShop).toBeVisible();
const productpg = page.getByRole('link', { name: 'Products' }).first();
await productpg.click();
console.log('✅ Navigated to the Product page')

//3. Add items to cart
await expect(page).toHaveURL('https://mini-shop.testamplify.com/products');
await page.getByRole('button', {name: 'Add to cart'}).first().click();
await page.getByRole('button', {name: 'Add to cart'}).nth(1).click();
await page.getByRole('button', {name: 'Add to cart'}).nth(2).click();
console.log('✅ Added multiple items to the cart')

//4. Go to cart and checkout
const cartLink = page.locator("//a[@href='/cart']");
await expect(cartLink).toBeVisible();
await cartLink.click();
await expect(page).toHaveURL('https://mini-shop.testamplify.com/cart');
console.log('✅ Navigated to the Cart page')

//5. Login to account and checkout
const checkOut = page.locator("//button[text()='Continue to checkout']");
await checkOut.click();
await page.locator("//input[@name='email']").fill('testuser2@yopmail.com');
await page.locator("//input[@name='password']").fill('Pass2005#');
await page.locator("//button[@type='submit']").click(); //login button
console.log('✅ Succesfully logged in!')

//6. Enter in Info to Checkout
await expect(page).toHaveURL('https://mini-shop.testamplify.com/cart');
await checkOut.click();
console.log('✅ Navigated back to the Cart page')

//7. Enter in Payment Info
await expect(page).toHaveURL('https://mini-shop.testamplify.com/checkout');
console.log('✅ Navigated to the Checkout page');

//Enter in Name, Address, Contact Info
await page.locator("//input[@name='firstName']").fill('Testa');
await page.locator("//input[@name='lastName']").fill('Rossa');
await page.locator("//input[@placeholder='House number and street name']").fill('201 Tester Court');
await page.locator("//input[@name='town']").fill('Atlanta');
console.log('✅ Added the name and address');

//State Dropdown
const statedropdown = page.locator("//input[@name='state']");
await statedropdown.click();
await page.waitForTimeout(500);
await page.locator("//div[text()='Georgia']").click();
await page.locator("//input[@name='zip']").fill('30023');
console.log('✅ Added the state and zip');

//Enter phone number and email
await page.locator("//input[@name='phone']").fill('3125557645');
await page.locator("//input[@name='email']").fill('testuser2@yopmail.com');
console.log('✅ Added the phone number and email');

//Enter in Payment Information
await page.locator("//input[@name='cardNo']").fill('4242 4242 4242 4242');
await page.locator("//input[@name='expiryDate']").fill('10/26');
await page.locator("//input[@name='ccv']").fill('200');
await page.locator("//input[@name='cardName']").fill('Testa Rossa');
console.log('✅ Added the payment information');

//8. Confirm Purchase
const paymentbutton = page.locator("//button[@type='submit']");
await paymentbutton.click();

//Confirm Success Message
await expect(page).toHaveURL('https://mini-shop.testamplify.com/checkout/success');
const confirmText = page.locator("//p[contains(normalize-space(), 'Your order is successful')]");
await expect(confirmText).toBeVisible();
console.log('✅ Succesfully completed the purchase!')
});