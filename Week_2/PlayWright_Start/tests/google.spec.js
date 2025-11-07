//importing test runner and assertion library
import { test, expect } from '@playwright/test';

//Await page to naavigate to Google
test('Open Google', async ({ page }) => {
  await page.goto('https://google.com');

  // Expect to see Google
  await expect(page).toHaveTitle(/Google/);
});

//Test that the Google website opens
test('verify that the Google page opens', async ({ page }) => { //Update the title name from get started link.
  await page.goto('https://google.com');
});