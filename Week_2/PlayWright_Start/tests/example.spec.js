// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// // npx playwright test
//     Runs the end-to-end tests.

//   npx playwright test --ui
//     Starts the interactive UI mode.

//   npx playwright test --project=chromium
//     Runs the tests only on Desktop Chrome.

//   npx playwright test example
//     Runs the tests in a specific file.

//   npx playwright test --debug
//     Runs the tests in debug mode.

//   npx playwright codegen
//     Auto generate tests with Codegen.

// We suggest that you begin by typing:

//     npx playwright test
