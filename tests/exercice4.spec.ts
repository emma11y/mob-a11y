import { test, expect } from '@playwright/test';
import {
  expectNoAxeViolations,
  expectNoColorContrastViolations,
  printButtonLinkViolations,
} from './utils';

// Definition of done
// ------------------
// 1: Détection d'erreur HTML 5
// 2: Détection d'erreurs automatiques avec Axe
// 3: Navigation clavier
// 4: Lecteur d'écran

test.describe('Exercice 4 : Boutons et liens', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test("Le bouton d'ouverture du panier doit être un <button>", async ({
    page,
  }) => {
    const toggle = await page.getByTestId('cart-toggle');

    await expect(toggle).toHaveRole('button');
  });

  test("Les boutons d'ajout dans le panier doivent être des <button>", async ({
    page,
  }) => {
    const buttons = await page.locator('text=Ajouter dans le panier');

    await expect(buttons).toHaveCount(6);

    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await expect(buttons.nth(i)).toHaveRole('button');
    }
  });

  test('Le bouton de fermeture du panier doit être un <button>', async ({
    page,
  }) => {
    await page.getByTestId('cart-toggle').click();
    const cart = await page.locator('id=cart');
    const toggle = await cart.getByTestId('cart-close');

    await expect(toggle).toHaveRole('button');
  });

  test('Les boutons de supression d\élément dans le panier doivent être des <button>', async ({
    page,
  }) => {
    await page.getByText('Ajouter dans le panier').first().click();
    await page.getByTestId('cart-toggle').click();

    const cart = page.locator('id=cart');
    const buttons = cart.locator('.remove');

    await expect(buttons).toHaveCount(1);

    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await expect(buttons.nth(i)).toHaveRole('button');
    }
  });

  test('Le lien pour payer doit être un <a>', async ({ page }) => {
    await page.getByText('Ajouter dans le panier').first().click();
    await page.getByTestId('cart-toggle').click();

    const cart = await page.locator('id=cart');
    const cta = await cart.getByText('Payer');
    await expect(cta).toHaveRole('link');
  });

  test('Afficher les violations Axe sur les <button> et <a>', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173/produits');

    await printButtonLinkViolations(page, 'body');
  });
});
