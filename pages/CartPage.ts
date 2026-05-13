import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async gotoHomePage() {
    await this.page.goto('/');
  }

  async addFirstProductToCart() {
    await this.page.locator('[data-test="product-name"]').first().click();
    await this.page.locator('[data-test="add-to-cart"]').click();
  }

  async openCart() {
    await this.page.locator('[data-test="nav-cart"]').click();
    await expect(this.page).toHaveURL(/checkout/);
  }

  async verifyProductAdded() {
    await expect(this.page.locator('app-cart')).toContainText('$');
  }

  async removeProductFromCart() {
    const deleteButton = this.page.locator('.btn.btn-danger').first();
    await expect(deleteButton).toBeVisible();
    await deleteButton.click();
  }

async verifyCartIsEmpty() {
    await expect(this.page.locator('app-cart')).not.toContainText('$', {
    timeout: 10000,
  });
}
}