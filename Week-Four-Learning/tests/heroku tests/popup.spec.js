import { test } from '@playwright/test';
import { entryadpage } from '../pages/Heroku/EntryAd.js';

test('Pop-up (Entry Ad)', async ({ page }) => {
  const entryAd = new entryadpage(page);
  await entryAd.goto();
  await entryAd.openHeader();
  await entryAd.closeHeader();
});