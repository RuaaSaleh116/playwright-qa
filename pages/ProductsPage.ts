import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async gotoHomePage() {
    await this.page.goto('/');
  }

  async sortBy(option: string) {
    await this.page.locator('[data-test="sort"]').selectOption({ label: option });
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1000);
  }

  async getProductNames() {
    return await this.page.locator('[data-test="product-name"]').allTextContents();
  }

  async getProductPrices() {
    const pricesText = await this.page.locator('[data-test="product-price"]').allTextContents();

    return pricesText.map(price =>
      Number(price.replace('$', '').trim())
    );
  }

  async verifyNamesSortedAZ() {
  const names = await this.getProductNames();

  const actualNames = names.map(name => name.trim());

  const sortedNames = [...actualNames].sort((a, b) =>
    a.localeCompare(b)
  );

  expect(actualNames).toEqual(sortedNames);
}

  async verifyPricesSortedHighToLow() {
    const prices = await this.getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(sortedPrices);
  }
}