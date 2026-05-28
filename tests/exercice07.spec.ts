import { test } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Lecteur d'écran

test.describe('Exercice 7 : les images doivent être décrites', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('Axe : les images doivent être décrites', async ({ page }) => {
    await expectNoAxeViolationsWithId(page, [
      'image-alt',
      'image-redundant-alt',
    ]);
  });
});
