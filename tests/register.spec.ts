import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Register Feature', () => {
  test('Register with valid data', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    const user = {
      firstName: 'Ruaa',
      lastName: 'Saleh',
      dob: '2004-06-11',
      country: 'JO',
      postcode: '11118',
      houseNumber: '10',
      phone: '0791234567',
      email: `student${Date.now()}@test.com`,
      password: 'RuaaQA@2026',
    };

    await registerPage.gotoRegisterPage();
    await registerPage.register(user);
    await registerPage.verifyRegisterSuccess();
  });

  
});