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
});
