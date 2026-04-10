import { test } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';

test.describe('Exercice 9 : la page doit être structurée', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('la page doit être structurée grâce aux landmarks', async ({ page }) => {
    await expectNoAxeViolationsWithId(page, [
      'region',
      'landmark-one-main',
      'landmark-no-duplicate-banner',
      'landmark-no-duplicate-contentinfo',
      'landmark-unique',
    ]);
  });
});
