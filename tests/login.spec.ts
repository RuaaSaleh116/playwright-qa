import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

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


  test('Login with valid credentials', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);

  const email = `student${Date.now()}@test.com`;
  const password = `Ruaa@${Date.now()}`;

  const user = {
    firstName: 'Ruaa',
    lastName: 'Saleh',
    dob: '2004-06-11',
    country: 'JO',
    postcode: '11118',
    houseNumber: '10',
    phone: '0791234567',
    email,
    password,
  };

  await registerPage.gotoRegisterPage();
  await registerPage.register(user);
  await registerPage.verifyRegisterSuccess();

  await loginPage.gotoLoginPage();
  await loginPage.login(email, password);
  await loginPage.verifySuccessfulLogin();
});
});