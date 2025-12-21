import { test } from '@playwright/test';
import { EntryAdPage } from '../pages/EntryAd.js';

test('Pop-up (Entry Ad)', async ({ page }) => {
  const entryAd = new EntryAdPage (page);
  await entryAd.goto();
  await entryAd.openHeader();
  await entryAd.closeHeader();
});