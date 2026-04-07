import { test, expect } from '@playwright/test';
import { expectNoAxeViolations, expectNoAxeViolationsWithId } from './utils';

// Definition of done
//-----------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Lecteur d'écran

test.describe('Exercice 1 : Niveaux de titres', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test("Le titre est visible et joue le rôle d'en-tête.", async ({ page }) => {
    const title = page.getByRole('heading', {
      name: 'Des autocollants qui vous collent à la peau.',
    });

    await expect(title).toBeVisible();
  });

  test("Axe : Le titre doit respecter l'ordre des niveaux de titres.", async ({
    page,
  }) => {
    await expectNoAxeViolationsWithId(page, [
      'page-has-heading-one',
      'heading-order',
    ]);
  });
});
