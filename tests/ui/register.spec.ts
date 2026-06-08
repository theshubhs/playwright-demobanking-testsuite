import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage';
import { generateUser } from '../../utils/userFactory';

test('User can register successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const registerPage = new RegisterPage(page);

  const user = generateUser();

  await loginPage.goto();

  await loginPage.clickRegister();

  await registerPage.register(user);

  await expect(page.locator('text=Your account was created successfully')).toBeVisible();

});