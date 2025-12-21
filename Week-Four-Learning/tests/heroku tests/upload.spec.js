import { test } from '@playwright/test';
import { UploadPage } from '../pages/Heroku/UploadPage.js';

test('Upload Files then verify', async ({ page }) => {
  const upload = new UploadPage(page);
  await upload.goto();

  // Put a sample file in test-data/files/sample.txt
  const file = 'test-data/files/sample.txt';
  await upload.upload(file);
  await upload.expectUploaded('sample.txt');
});