import { test, expect } from '@playwright/test';

test('Mini-Shop Navigation', async ({ page }) => {
    //1. Navigate to homepage
    console.log('✅ Go to Mini Shop Homepage')
    await page.goto('https://mini-shop.testamplify.com/');

    //Assert Title & URL
    await expect(page).toHaveTitle(/Minishop/);
    await expect(page).toHaveURL(/mini-shop\.testamplify\.com/);
    console.log('Mini Shop page is loaded!');

    //2. Click a product category
    const productCategory = page.getByRole('combobox').first();
    await productCategory.click(); 
    await page.locator('text=Electronics').click();
    console.log('Clicked on the product category')

    //Assert you're on product page
    await expect(page.getByText('NEW20')).toBeVisible();
    await expect(page).toHaveURL('https://mini-shop.testamplify.com/');
    console.log('Successfully viewed the products page');

    //3. Count the product items
    const productCards = page.locator('.grid > div');
    await expect(productCards).toHaveCount(14);
    console.log('Reviewed the count of all items');

    //4. Verify buttons are enabled
    const addcartBtn = page.locator('text=Add To Cart').first();
    await expect(addcartBtn).toBeEnabled();
    console.log('Verified that the Add to Cart button is enabled');

    //Navigate back & forward
    await page.goBack();
    await page.goForward();
    console.log('Navigating back and forward on the website');

    //5.Confirm visibility of a key text
    await expect(productCategory).toBeVisible();
    console.log('Product page verified! ✅')
})