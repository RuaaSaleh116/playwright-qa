import { Page, expect } from '@playwright/test';

type RegisterUser = {
  firstName: string;
  lastName: string;
  dob: string;
  country: string;
  postcode: string;
  houseNumber: string;
  phone: string;
  email: string;
  password: string;
};

export class RegisterPage {
  constructor(private page: Page) {}

  async gotoRegisterPage() {
    await this.page.goto('/auth/register');
  }

  async register(user: RegisterUser) {
    await this.page.locator('[data-test="first-name"]').fill(user.firstName);
    await this.page.locator('[data-test="last-name"]').fill(user.lastName);
    await this.page.locator('[data-test="dob"]').fill(user.dob);

    await this.page.locator('[data-test="country"]').selectOption(user.country);
    await this.page.getByPlaceholder('Your Postcode *').fill(user.postcode);
    await this.page.getByPlaceholder('e.g. 42 *').fill(user.houseNumber);

    await this.page.locator('[data-test="phone"]').fill(user.phone);
    await this.page.locator('[data-test="email"]').fill(user.email);
    await this.page.locator('[data-test="password"]').fill(user.password);

    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async verifyRegisterSuccess() {
    await expect(this.page).toHaveURL(/login|auth/);
  }
}