import { test } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';

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
