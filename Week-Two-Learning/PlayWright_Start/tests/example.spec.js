// @ts-check -- imports test runner and assertion library
import { test, expect } from '@playwright/test';

// Waits for browser to load. Async waits from the browser to load and await waits until a task is finished running.
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring. Expect is waiting to see that the page has a specific name.
  await expect(page).toHaveTitle(/Playwright/);
});

//Navigating to the get started URL. Page allows each test to get a clean start while running each test
test('verify that the Docs link opens the Documentation page', async ({ page }) => { //Update the title name from get started link.
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Docs' }).click(); //Updated the locator and expectation
  await expect(page).toHaveURL(/docs/);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//PlayWright Commands (Go to playwright.dev for more info)
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

// npx playwright show-report
// Runs the report for the test

// We suggest that you begin by typing:

//     npx playwright test
