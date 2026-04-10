import { test, expect } from '@playwright/test';
import { printAxeViolations } from './utils/axe-utils';

test.describe("Tests d'accessibilité Axe", () => {
  test('La page Produit ne doit pas avoir de violations Axe', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173/produits');
    await printAxeViolations(page);
  });

  test('La page Produit avec cookies ne doit pas avoir de violations Axe', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173/produits-avec-cookies');
    await printAxeViolations(page);
  });

  test('La page Finaliser votre commande ne doit pas avoir de violations Axe', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173/produits');

    const products = await page.locator('.add-to-cart');

    await products.nth(0).click();
    await products.nth(3).click();

    await page.goto('http://localhost:5173/finaliser-votre-commande');

    await printAxeViolations(page);
  });
});
