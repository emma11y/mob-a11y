import { test } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';
import {
  switchToLightTheme,
  switchToDarkTheme,
} from './utils/interactions-utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe

test.describe('Exercice 2 : Contrastes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('Aucune violation de contraste sur la page - en thème clair', async ({
    page,
  }) => {
    await page.locator('#products-page').waitFor();

    await switchToLightTheme(page);

    await expectNoAxeViolationsWithId(
      page,
      ['color-contrast'],
      '#products-page',
    );
  });

  test('Aucune violation de contraste sur la page - en thème sombre', async ({
    page,
  }) => {
    await page.locator('#products-page').waitFor();

    await switchToDarkTheme(page);

    await expectNoAxeViolationsWithId(
      page,
      ['color-contrast'],
      '#products-page',
    );
  });
});
