import { expect } from '@playwright/test';
import { shopUser } from '../../credentials.js';

export class CheckoutPage {
    constructor (page) {
    this.page = page;
    this.addToCartSecond = page.getByRole('button', { name: /add to cart/i }).second();
    this.cart = page.locator('//a[@href="/cart"]');
    this.continueToPayment = page.getByRole('button', {name: /continue to payment/i });

    //Login
    this.email = page.getByRole('textbox', { name: email/i });
    this.password = page.locator('textbox', { name: password/i });
    this.loginBtn = page.getByRole('button', { name: login/i });
    
    //Billing
    this.billingheader = page.getByRole('heading', { name: /billing details/i});
    this.firstName = page.locator('//input[@name="firstName"]');
    this.lastName = page.locator('//input[@name="lastName"]');
    this.street = page.locator('//input[@name="address"]');
    this.city = page.locator('//input[@name="town"]');
    this.state = page.getByPlaceholder('Choose State');
    this.zip = page.locator('//input[@name="zip"]');
    this.phone = page.locator('//input[@name="phone"]');
    this.emailBill = page.locator('//input[@name="email"]');

    //Payment
    this.cardNo = page.getByRole('textbox', { name: /card number/i });
    this.expirationdate = page.getByRole('textbox', { name: /expiry date/i });
    this.ccv = page.getByRole('textbox', { name: /ccv/i });
    this.cardName = page.getByRole('textbox', { name: /card Name/i });
    this.submitBtn = page.getByRole('button', { name: /continue to payment/i });
    this.success = page.getByText(/order is successful/i);
}

}