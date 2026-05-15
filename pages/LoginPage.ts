import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.email = page.locator('[data-test="email"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
    this.errorMessage = page.locator('[data-test="login-error"]');
  }

  async gotoLoginPage() {
    await this.page.goto('/auth/login');
  }

  async login(email: string, password: string) {

    await this.email.fill(email);

    await this.password.fill(password);

    await this.loginButton.click();
  }

  async verifyFailedLogin() {
    await expect(this.errorMessage).toBeVisible();
  }

    async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(/account/);
  }
}