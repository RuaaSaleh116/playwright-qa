import { test } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Sort Feature', () => {
  test.beforeEach(async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.gotoHomePage();
  });

  test('Sort products by Name A-Z', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.sortBy('Name (A - Z)');
    await productsPage.verifyNamesSortedAZ();
  });

  test('Sort products by Price High to Low', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.sortBy('Price (High - Low)');
    await productsPage.verifyPricesSortedHighToLow();
  });
});