import { expect, test } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';

test.describe('Exercice 9 : la page doit être structurée', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('La région du header doit être présente', async ({ page }) => {
    const banner = await page.getByRole('banner');
    await expect(await banner.count()).toEqual(1);
    await expect(await banner.evaluate((node) => node.tagName)).toBe('HEADER');
  });

  test('Il doit y avoir au moins une région navigation', async ({ page }) => {
    const navigation = await page.getByRole('navigation');
    await expect(await navigation.count()).toBeGreaterThanOrEqual(1);
    await expect(await navigation.evaluate((node) => node.tagName)).toBe('NAV');
  });

  test('La région principale doit être présente', async ({ page }) => {
    const main = await page.getByRole('main');
    await expect(await main.count()).toEqual(1);
    await expect(await main.evaluate((node) => node.tagName)).toBe('MAIN');
  });

  test('La région du footer doit être présente', async ({ page }) => {
    const footer = await page.getByRole('contentinfo');
    await expect(await footer.count()).toEqual(1);
    await expect(await footer.evaluate((node) => node.tagName)).toBe('FOOTER');
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
