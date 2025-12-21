import { defineConfig } from '@playwright/test';

export default defineConfig({
  // ✅ Always keep this simple
  testDir: './tests',

  // ✅ Match your file naming
  testMatch: /.*\.spec\.js/,

  // Optional but safe defaults
  timeout: 30_000,

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    trace: 'on-first-retry',
  },

  reporter: [['html', { open: 'never' }]],

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
