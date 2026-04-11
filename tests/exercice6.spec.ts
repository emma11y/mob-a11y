import { expectNoAxeViolationsWithId } from './utils/axe-utils';
import { test, expect } from '@playwright/test';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Lecteur d'écran

test.describe('Exercice 6 : Les boutons doivent avoir des labels explicites', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('Les boutons et liens doivent être explicites', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    const main = page.locator('.main');

    const buttonsCount = await main.locator('button').count();

    if (buttonsCount === 0) {
      throw new Error('❌  No button found on the main section');
    }

    await expectNoAxeViolationsWithId(page, [
      'link-name',
      'link-in-text-block',
      'button-name',
    ]);
  });

  test("L'icône du bouton d'ouverture du panier doit avoir un texte alternatif", async ({
    page,
  }) => {
    const toggle = page.getByTestId('cart-toggle');
    const toggleLabel = await toggle.innerText();
    expect(toggleLabel).toBe('Afficher le panier');
  });

  test("Le texte alternatif du bouton d'ouverture du panier doit être uniquement visible pour les lecteurs d'écrans", async ({
    page,
  }) => {
    const toggle = page.getByTestId('cart-toggle');
    const toggleLabel = toggle.getByText('Afficher le panier');
    await expect(toggleLabel).toHaveClass('sr-only');
  });

  test("L'icône du bouton de fermeture du panier doit avoir un texte alternatif", async ({
    page,
  }) => {
    await page.getByTestId('cart-toggle').click();

    const toggle = page.getByTestId('cart-close');
    const toggleLabel = await toggle.innerText();
    expect(toggleLabel).toBe('Fermer le panier');
  });

  test("Le texte alternatif du bouton de fermeture du panier doit être uniquement visible pour les lecteurs d'écrans", async ({
    page,
  }) => {
    await page.getByTestId('cart-toggle').click();

    const toggle = page.getByTestId('cart-close');
    const toggleLabel = toggle.getByText('Fermer le panier');
    await expect(toggleLabel).toHaveClass('sr-only');
  });

  test('Le bouton "Ajouter dans le panier" ne doit pas être générique', async ({
    page,
  }) => {
    await page.waitForLoadState('networkidle');

    const productCards = page.locator('.product-card');

    const count = await productCards.count();

    for (let i = 0; i < count; i++) {
      const product = productCards.nth(i);

      const title = product.locator('.title');
      const button = product.locator('.add-to-cart');

      const titleText = (await title.innerText()).trim();
      const textButton = await button.textContent();

      await expect(textButton).toBe(`Ajouter ${titleText} dans le panier`);
    }
  });

  test('Le bouton "Supprimer le produit du panier" ne doit pas être générique', async ({
    page,
  }) => {
    await page.waitForLoadState('networkidle');

    const products = page.locator('.add-to-cart');

    await products.nth(0).click();
    await products.nth(3).click();

    await page.getByTestId('cart-toggle').click();

    const items = await page.locator('cart-drawer .item');

    //const buttonsToRemove = await page.locator('.remove span');

    const count = await items.count();
    for (let i = 0; i < count; i++) {
      const item = items.nth(i);

      const name = item.locator('.name');
      const button = item.locator('.remove');

      const textName = (await name.innerText()).trim();
      const textButton = await button.textContent();

      expect(textButton).toBe(`Supprimer le produit ${textName} du panier`);
    }
  });
});
