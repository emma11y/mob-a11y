import { test, expect } from '@playwright/test';
import { printButtonLinkViolations } from './utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Lecteur d'écran

test.describe('Exercice 6 : Les boutons doivent avoir des labels explicites', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test("Aucune violation Axe sur le bouton d'ouverture du panier", async ({
    page,
  }) => {
    await printButtonLinkViolations(page, '#cart-toggle');
  });

  test("L'icône du bouton d'ouverture du panier doit avoir un texte alternatif", async ({
    page,
  }) => {
    const toggle = await page.getByTestId('cart-toggle');
    const toggleLabel = await toggle.innerText();
    await expect(toggleLabel).not.toBe('');
  });

  test("Le texte alternatif du bouton d'ouverture du panier doit être uniquement visible pour les lecteurs d'écrans", async ({
    page,
  }) => {
    const toggle = await page.getByTestId('cart-toggle');
    const toggleLabel = toggle.locator('span');
    await expect(toggleLabel).toHaveClass('sr-only');
  });

  test("L'icône du bouton de fermeture du panier doit avoir un texte alternatif", async ({
    page,
  }) => {
    const toggle = await page.getByTestId('cart-close');
    const toggleLabel = await toggle.innerText();
    await expect(toggleLabel).not.toBe('');
  });

  test("Le texte alternatif du bouton de fermeture du panier doit être uniquement visible pour les lecteurs d'écrans", async ({
    page,
  }) => {
    const toggle = await page.getByTestId('cart-close');
    const toggleLabel = toggle.locator('span');
    await expect(toggleLabel).toHaveClass('sr-only');
  });

  test('Le bouton "Ajouter dans le panier" doit être explicite', async ({
    page,
  }) => {
    const buttons = await page.locator('text=Ajouter dans le panier');
    await expect(buttons).toHaveCount(0);
  });

  test('Le bouton "Supprimer le produit du panier" doit être explicite', async ({
    page,
  }) => {
    const buttonsToAdd = await page
      .locator('text=Ajouter dans le panier')
      .elementHandles();

    for (const el of buttonsToAdd) {
      await el.click();
    }

    await page.getByTestId('cart-toggle').click();

    const buttonsToRemove = await page.locator(
      'text=Supprimer le produit du panier',
    );
    await expect(buttonsToRemove).toHaveCount(0);
  });
});
