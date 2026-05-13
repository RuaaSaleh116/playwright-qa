import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Feature', () => {
  test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
      'wrong@test.com',
      'wrongpassword'
    );

    await loginPage.verifyFailedLogin();
  });
});