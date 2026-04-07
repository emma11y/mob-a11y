import { test } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe

test.describe('Exercice 2 : Contrastes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('Aucune violation de contraste sur la page', async ({ page }) => {
    await expectNoAxeViolationsWithId(
      page,
      ['color-contrast'],
      '#products-page',
    );
  });
});
