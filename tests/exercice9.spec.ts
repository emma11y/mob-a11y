import { expect, test } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';

test.describe('Exercice 9 : la page doit être structurée', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('La région du header doit être présente', async ({ page }) => {
    const count = await page.getByRole('banner').count();
    await expect(count).toEqual(1);
  });

  test('Il doit y avoir au moins une région navigation', async ({ page }) => {
    const count = await page.getByRole('navigation').count();
    await expect(count).toBeGreaterThanOrEqual(1);
  });

  test('La région principale doit être présente', async ({ page }) => {
    const count = await page.getByRole('main').count();
    await expect(count).toEqual(1);
  });

  test('La région du footer doit être présente', async ({ page }) => {
    const count = await page.getByRole('contentinfo').count();
    await expect(count).toEqual(1);
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
