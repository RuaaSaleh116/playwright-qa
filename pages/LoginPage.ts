import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async gotoLoginPage() {
    await this.page.goto('/auth/login');
    await expect(this.page.locator('[data-test="email"]')).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.page.locator('[data-test="email"]').fill(email);
    await this.page.locator('[data-test="password"]').fill(password);

    const loginButton = this.page.locator('[data-test="login-submit"]');
    await expect(loginButton).toBeVisible();
    await loginButton.click();
  }

  async verifyFailedLogin() {
      await expect(
      this.page.locator('[data-test="login-error"], .alert, .alert-danger')
    ).toBeVisible({ timeout: 10000 });
  }
}