import { expect, test } from '@playwright/test';

test.describe('Exercice 10 : Notifications', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test(`Les notifications (ou messages d'alertes) doivent être vocalisés au lecteur d'écran`, async ({
    page,
  }) => {
    const alert = page.locator('.alert');

    const products = page.locator('.add-to-cart');
    const titles = page.locator('.card .title');

    await products.nth(0).click();

    await expect(alert).toHaveAttribute('role', 'alert');
    await expect(alert).toHaveAttribute('aria-live', 'polite');
    await expect(alert).toHaveAttribute('aria-relevant', 'additions text');

    expect(await alert.textContent()).toBe(
      `Vous avez ajouté le produit ${await titles.nth(0).textContent()} dans votre panier`,
    );
  });
});
