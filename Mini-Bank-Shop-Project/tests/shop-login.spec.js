import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/shop/CartPage.js';

test('Adding items to shopping cart', async ({ page }) => {
  // Go to home
  await page.goto('https://mini-shop.testamplify.com/');
  await expect(page).toHaveTitle("Minishop");

  // Add first visible product
  const addToCart = page.getByRole('button', { name: /add to cart/i }).first();
  await addToCart.click();

  // Use CartPage
  const cart = new CartPage(page);
  await cart.openCart();
  await cart.assertItemInCart();
  await cart.Checkout();

  // Not logged in? You’ll land on login page first
  await expect(page).toHaveURL(/\/login|\/checkout/);
});