import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // ✅ Always keep this simple
  testDir: './tests',

   // 🕒 Global timeouts
  timeout: 30_000,
  expect: { timeout: 5_000 },

  retries: 0,

  // run tests in files in parallel
   fullyParallel: true,

   // let Playwright choose a good number of workers (parallel runs)
   // (you can override on CLI with --workers=6, etc.)
   workers: '100%',

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
    {name: 'chromium', use: { browserName: 'chromium' }, screenshot: 'only-on-failure',},
    { name: 'firefox',  use: { ...devices['Desktop Firefox'], screenshot: 'only-on-failure', } },
    //{ name: 'webkit',   use: { ...devices['Desktop Safari'] } },
    {name: 'edge', use: { ...devices['Desktop Edge'], channel: 'msedge', screenshot: 'only-on-failure'}}, // runs real Microsoft Edge 
  ],
});
