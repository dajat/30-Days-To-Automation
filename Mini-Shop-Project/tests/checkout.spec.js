// @ts-check
import { test, expect } from '@playwright/test';
import { urls, creds } from '../test-data/credentials';
import { CheckoutPage } from '../pages/checkout.page';
import { LoginPage } from '../pages/login.page';

test('Checking Out A Product', async ({ page }) => {
  const checkout = new CheckoutPage (page);
  const login = new LoginPage (page);
  
  await page.goto(urls.home)
  await expect (page).toHaveURL('https://mini-shop.testamplify.com/');
  console.log('✅ 1. Navigate to Website');

  await login.signinBtn.click();
  await login.login(creds.valid);
  await login.loginBtn.click();
  console.log('✅ 2. Sign In To Account');

  await checkout.productsPage.click();
  await expect(page).toHaveURL('https://mini-shop.testamplify.com/products');
  await checkout.addtoCart.click();
  await checkout.cartBtn.click();
  console.log('✅ 3. Add item and go to cart page')

  await checkout.checkoutBtn.click();
   await expect(page).toHaveURL('https://mini-shop.testamplify.com/checkout');

})
