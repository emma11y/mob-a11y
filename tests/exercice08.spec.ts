import { expect, test } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';

// Definition of done
// ------------------
// 1: Détection d'erreur HTML 5
// 2: Détection d'erreurs automatiques avec Axe
// 3: Lecteur d'écran

test.describe('Exercice 8 : la page doit être structurée', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('La région du header doit être présente', async ({ page }) => {
    const banner = page.getByRole('banner');
    expect(await banner.count()).toEqual(1);
    expect(await banner.evaluate((node) => node.tagName)).toBe('HEADER');
  });

  test('Il doit y avoir au moins une région navigation', async ({ page }) => {
    const navigation = page.getByRole('navigation');
    expect(await navigation.count()).toBeGreaterThanOrEqual(1);
    expect(await navigation.evaluate((node) => node.tagName)).toBe('NAV');
  });

  test('La région principale doit être présente', async ({ page }) => {
    const main = page.getByRole('main');
    expect(await main.count()).toEqual(1);
    expect(await main.evaluate((node) => node.tagName)).toBe('MAIN');
  });

  test('La région du footer doit être présente', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    expect(await footer.count()).toEqual(1);
    expect(await footer.evaluate((node) => node.tagName)).toBe('FOOTER');
  });

  test('Axe : la page doit être structurée grâce aux landmarks', async ({
    page,
  }) => {
    await expectNoAxeViolationsWithId(page, [
      'region',
      'landmark-one-main',
      'landmark-no-duplicate-banner',
      'landmark-no-duplicate-contentinfo',
      'landmark-unique',
    ]);
  });
});
