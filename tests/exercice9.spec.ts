import { test, expect } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils/axe-utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Lecteur d'écran

test.describe('Exercice 9 : Formulaire', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');

    const products = await page.locator('.add-to-cart');

    await products.nth(0).click();
    await products.nth(3).click();

    await page.goto('http://localhost:5173/finaliser-votre-commande');
  });

  test('Aucune violation Axe sur le formulaire', async ({ page }) => {
    await expectNoAxeViolationsWithId(page, [
      'label',
      'label-title-only',
      'form-field-multiple-labels',
      'input-button-name',
      'select-name',
      'textarea-name',
      'aria-input-field-name',
      'aria-valid-attr',
      'aria-valid-attr-value',
    ]);
  });

  test('La liste déroulante doit être un select', async ({ page }) => {
    const country = await page.locator('#country');
    await expect(await country.evaluate((node) => node.tagName)).toBe('SELECT');
  });

  test('Chaque label doit avoir un attribut for', async ({ page }) => {
    const labels = await page.locator('label');

    const count = await labels.count();
    for (let i = 0; i < count; i++) {
      await expect(await labels.nth(i).getAttribute('for')).not.toBeNull();
    }
  });

  test("Chaque label doit avoir le même id que l'input", async ({ page }) => {
    const labels = await page.locator('label');
    const inputs = await page.locator('input, select');

    const count = await labels.count();
    for (let i = 0; i < count; i++) {
      const labelFor = await labels.nth(i).getAttribute('for');
      const inputId = await inputs.nth(i).getAttribute('id');

      console.log('for', await labels.nth(i).getAttribute('for'));
      console.log('id', await inputs.nth(i).getAttribute('id'));

      expect(labelFor).toStrictEqual(inputId);
    }
  });

  test("Chaque champ doit avoir un message d'erreur restitué au lecteur d'écran", async ({
    page,
  }) => {
    await page.getByTestId('pay-button').click();

    const errors = await page.locator('.has-error');

    const count = await errors.count();

    expect(count).not.toBe(0);

    for (let i = 0; i < count; i++) {
      const element = await errors.nth(i).locator('input, select');

      expect(await element.getAttribute('aria-invalid')).toBe('true');

      expect(await element.getAttribute('aria-describedBy')).toStrictEqual(
        `error-${await element.getAttribute('id')}`,
      );
    }
  });
});
