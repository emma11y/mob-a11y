import { test, expect } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';

// Definition of done
//-----------------
// 1: Détection d'erreur HTML 5
// 2: Détection d'erreurs automatiques avec Axe
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
    const headings = await page.getByRole('heading').all();

    if (headings.length < 2) {
      throw new Error("❌ Aucune hiérarchie de titre n'a été trouvée sur la page.");
    }

    await expectNoAxeViolationsWithId(page, [
      'page-has-heading-one',
      'heading-order',
    ]);
  });
});
