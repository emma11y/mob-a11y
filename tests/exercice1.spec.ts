import { test, expect } from '@playwright/test';
import { expectNoAxeViolations } from './utils';

// Definition of done
//-----------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Lecteur d'écran

test.describe('Exercice 1 : Niveaux de titres', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test("Le titre principal ne doit pas présenter de violations d'accessibilité détectables.", async ({
    page,
  }) => {
    await expectNoAxeViolations(page, '#hero-title');
  });

  test("Le titre principal est visible et joue le rôle d'en-tête.", async ({
    page,
  }) => {
    const title = page.getByRole('heading', {
      name: 'Des autocollants qui vous collent à la peau.',
    });

    await expect(title).toBeVisible();
  });
});
