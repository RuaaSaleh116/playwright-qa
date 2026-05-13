import { test } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Feature', () => {
  test('Add product to cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.gotoHomePage();
    await cartPage.addFirstProductToCart();
    await cartPage.openCart();
    await cartPage.verifyProductAdded();
  });

  test('Remove product from cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.gotoHomePage();
    await cartPage.addFirstProductToCart();
    await cartPage.openCart();
    await cartPage.removeProductFromCart();
    await cartPage.verifyCartIsEmpty();
  });
});