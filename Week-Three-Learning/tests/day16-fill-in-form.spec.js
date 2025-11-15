//tag[@attribute='value']

import { test, expect } from '@playwright/test';

test('Day 16 - Fill Mini Shop checkout form', async ({ page }) => {
  // 1. Go to Mini Shop
  console.log('STEP 1: Navigate to Mini Shop home page');
  await page.setViewportSize({ width: 18000, height: 1080 }); //maximize window size
  await page.goto('https://mini-shop.testamplify.com/');
  await expect(page).toHaveURL('https://mini-shop.testamplify.com/'); //assertion

  //2. Add Item To Cart
  console.log('STEP 2: Adding item to cart');
  const addcartBtn = page.locator('(//button[normalize-space()="Add to cart"])[1]');
  await addcartBtn.click();

  //3. Log In to Account
  console.log('STEP 3: Login to Account');
  const cartBtn = page.locator('//a[@href="/cart"]');
  const checkoutBtn = page.locator('//button[text()="Continue to checkout"]');
  const loginBtn = page.locator('//button[@type="submit"]');

  //Enter in Credentials
  await cartBtn.click();
  await checkoutBtn.click();
  await expect(page).toHaveURL('https://mini-shop.testamplify.com/login?redirect=%2Fcart');

  await page.locator("//input[@placeholder='you@example.com']").fill('testuser2@yopmail.com'); //email
  await page.locator("//input[@name='password']").fill('Pass2005#'); //password
  await loginBtn.click();

  //4. Go to Cart
  console.log('STEP 4: Navigating to the Cart');
  await expect(page).toHaveURL('https://mini-shop.testamplify.com/cart');
  await expect(checkoutBtn).toBeVisible();
  await checkoutBtn.click();

  //5.Fill In Form
  console.log('STEP 5: Fill in Contact Info');
  await expect(page).toHaveURL('https://mini-shop.testamplify.com/checkout');
  
  //Entering in First and Last Name
  await page.locator('//input[@name="firstName"]').fill('Testa');
  await page.locator('//input[@name="lastName"]').fill('Rossa');
  console.log("Succesfully added name");

  //Street Address, City, State, Zip
  await page.locator('//input[@placeholder="House number and street name"]').fill('201 Test Lane');
  await page.locator('//input[@name="town"]').fill('Atlanta');
  console.log("Succesfully added address");

  //State Dropdown
  const State = page.locator("//input[@name='state']");
  await State.click();
  await page.waitForTimeout(500);
  await page.locator("//div[text()='Georgia']").click(); //selecting a state
  console.log("Succesfully added State");

  //Zip code
  await page.locator("//input[@name='zip']").fill('30033');
  console.log("Succesfully added zip code");

  //Contact Info
  await page.locator("//input[@name='phone']").fill('3125026998'); //phone number
  await page.locator("//input[@name='email']").fill('testuser411@yopmail.com'); //email
  console.log("Succesfully added phone number and email");

  //Entering in Payment Info
  console.log('STEP 6: Fill In Payment Info');
  await page.locator("//input[@name='cardNo']").fill('4242 4242 4242 4242'); //card number
  await page.locator("//input[@name='expiryDate']").fill('10/26'); //exp date
  await page.locator("//input[@name='ccv']").fill('200');
  await page.locator("//input[@name='cardName']").fill('Testa Rossa'); //card name
  console.log("Succesfully added all card info");

  //6.Assert Confirmation message
  const paymentBtn = page.locator("//button[@type='submit']");
  await paymentBtn.click();
  const confirmText = page.locator("//p[contains(normalize-space(), 'Your order is successful')]");
  await expect(page).toHaveURL('https://mini-shop.testamplify.com/checkout/success');
  await expect(confirmText).toBeVisible();

  console.log('✅Day 16 - Fill In Form Completed!');
  
});
