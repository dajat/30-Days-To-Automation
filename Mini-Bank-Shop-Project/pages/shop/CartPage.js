import { expect } from '@playwright/test';

export class CartPage {
    constructor (page) {
    this.page = page;
    this.cart = page.locator('//a[@href="/cart"]');
    this.cartItem = page.locator("[data-testid='cart-item'], .cart-item, text=Add to cart").nth(1);
    this.checkoutBtn = page.getByRole('button', { name: /continue to checkout/i });
    
    }

async openCart(){
    await this.cart.click();
    await expect(this.page).toHaveURL('https://mini-shop.testamplify.com/cart');
    await expect(this.checkoutBtn).toBeVisible;
}

async assertItemInCart(){
    await expect(this.checkoutBtn).toBeEnabled();
}

async Checkout(){
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.checkoutBtn.click()
    ]);
}
}