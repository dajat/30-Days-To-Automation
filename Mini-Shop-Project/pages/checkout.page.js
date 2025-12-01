import { expect } from '@playwright/test';
import { urls} from '../test-data/credentials';

export class CheckoutPage {
    constructor(page){
        this.page = page;
        this.productsPage = page.getByRole('link', { name: 'Products' }).first();
        this.addtoCart = page.getByRole('button', { name: 'Add to cart' }).first()
        this.cartBtn = page.locator('a[href="/cart"]')
        this.checkoutBtn = page.getByRole('button', {name: 'Continue to checkout'})
    }

    async assertLoaded() {
    await expect(this.productsPage).toBeVisible();

    }

    async startCheckout() {
    await this.productsPage.click();
    await this.addToCartBtn.click();
    await this.cartBtn.click();
    await this.checkoutBtn.click();
    }
};