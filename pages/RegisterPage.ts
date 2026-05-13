import { Page, expect } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async gotoRegisterPage() {
    await this.page.goto('/auth/register');
  }

  async register(email: string, password: string) {
    await this.page.locator('[data-test="first-name"]').fill('Ruaa');
    await this.page.locator('[data-test="last-name"]').fill('Saleh');
    await this.page.locator('[data-test="dob"]').fill('11/6/2004');

    await this.page.locator('[data-test="country"]').selectOption('JO');
    await this.page.getByPlaceholder('Your Postcode *').fill('11118');
    await this.page.getByPlaceholder('e.g. 42 *').fill('10');

    await this.page.locator('[data-test="phone"]').fill('0791234567');
    await this.page.locator('[data-test="email"]').fill(email);
    await this.page.locator('[data-test="password"]').fill(password);

    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async verifyRegisterSuccess() {
    await expect(this.page).toHaveURL(/login|auth/);
  }
}