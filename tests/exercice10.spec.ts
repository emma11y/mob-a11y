import { test, expect } from '@playwright/test';

test.describe('Exercice 10 : Liste', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('La liste de produits doit être structurée en liste', async ({
    page,
  }) => {
    const productGrid = page.locator('.product-grid');
    const productGridTagName = await productGrid.evaluate(
      (node) => node.tagName,
    );
    expect(productGridTagName).toBe('UL');

    const productCards = page.locator('.product-cards');
    const count = await productCards.count();
    expect(count).not.toBe(6);

    for (let i = 0; i < count; i++) {
      const productCard = productCards.nth(i);

      const productCardTagName = await productCard.evaluate(
        (node) => node.tagName,
      );
      expect(productCardTagName).toBe('LI');
    }
  });

  test('La liste de produits dans le panier doit être structurée en liste', async ({
    page,
  }) => {
    const products = await page.locator('.add-to-cart');

    await products.nth(0).click();
    await products.nth(3).click();

    await page.getByTestId('cart-toggle').click();

    const items = page.locator('.items');

    const itemsRoleName = await items.evaluate((node) => node.role);
    expect(itemsRoleName).toBe('list');

    const productCards = page.locator('.item');
    const count = await productCards.count();
    expect(count).toBe(2);

    for (let i = 0; i < count; i++) {
      const productCard = productCards.nth(i);

      const productCardTagName = await productCard.evaluate(
        (node) => node.role,
      );
      expect(productCardTagName).toBe('listitem');
    }
  });
});
