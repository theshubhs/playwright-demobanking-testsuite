import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage';
import { HomePage } from '../../pages/HomePage';

import { generateUser } from '../../utils/userFactory';

test('Register and login with same user', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const registerPage = new RegisterPage(page);
  const homePage = new HomePage(page);

  const user = generateUser();

  // Open application
  await loginPage.goto();

  // Register
  await loginPage.clickRegister();

  await registerPage.register(user);

  // Verify successful registration
  await expect(
    page.locator('text=Your account was created successfully')
  ).toBeVisible();

  // Logout
  await homePage.logout();

  // Login again
  await loginPage.login(
    user.username,
    user.password
  );

  // Verify landing page
  await expect(homePage.accountsOverviewText).toBeVisible();
});