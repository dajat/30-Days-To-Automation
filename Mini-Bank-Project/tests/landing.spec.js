//Landing Page Navigation Test

//Importing data from test folder, landing page POM and urls from test data credentials file.
import { test } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { urls } from '../test-data/credentials';

test('Landing page: navigation + assertions + actions', async ({ page }) => {
  const landing = new LandingPage(page); //created landing class to access methods and things from the landing page class.

  await landing.goto(urls.home);
  console.log('Step 1: Go to homepage');

  await landing.assertLoaded();
  console.log('Step 2: Page Loaded');  

  await landing.clickHeroGetStartedAndBack();
  console.log('Step 3: Button Clicked');
  console.log('Step 4: Browser navigating back');

  await landing.clickLowerGetStartedAndBack();
  console.log('Step 5: Button Clicked');
  console.log('Step 6: Browser navigating back');

  await landing.clickLogin();
  console.log('Step 7: Login Button Clicked');
});