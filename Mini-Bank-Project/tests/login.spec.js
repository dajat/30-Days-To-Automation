import { test } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { LoginPage } from '../pages/login.page';
import { creds, urls } from '../test-data/credentials';

test('Login: 2 invalid attempts then valid login', async ({ page }) => {
  const landing = new LandingPage(page); //created object to access page
  const login = new LoginPage(page);

  //Methods and Assertions
  await landing.goto(urls.home);
  await landing.clickLogin();
  await login.assertLoaded();

  await login.tryInvalidAttempts(creds.invalid);
  await login.login(creds.valid.email, creds.valid.password);
  console.log('✅ Screenshot saved successfully');
});