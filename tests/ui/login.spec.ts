import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login page loads successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();

});