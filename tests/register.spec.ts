import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Register Feature', () => {
  test('Register with valid data', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    const email = `student${Date.now()}@test.com`;
    const password = 'Password123!';

    await registerPage.gotoRegisterPage();
    await registerPage.register(email, password);
    await registerPage.verifyRegisterSuccess();
  });
});