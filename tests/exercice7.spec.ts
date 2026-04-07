import { test, expect } from '@playwright/test';
import { expectNoAxeViolationsWithId } from './utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Lecteur d'écran

test.describe('Exercice 7 : Formulaire', () => {
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
    ]);
  });

  test('Chaque label doit avoir un attribut for', async ({ page }) => {
    const labels = await page.locator('label');

    const count = await labels.count();
    for (let i = 0; i < count; i++) {
      await expect(labels.nth(i)).toHaveAttribute('for');
    }
  });

  test("Chaque label doit avoir le même id que l'input", async ({ page }) => {
    const labels = await page.locator('label');
    const inputs = await page.locator('input');

    const count = await labels.count();
    for (let i = 0; i < count; i++) {
      await expect(await labels.nth(i).getAttribute('for')).toStrictEqual(
        await inputs.nth(i).getAttribute('id'),
      );
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
      const element = await errors.nth(i).locator('input');

      expect(await element.getAttribute('aria-invalid')).toBe('true');

      expect(await element.getAttribute('aria-describedBy')).toStrictEqual(
        `error-${await element.getAttribute('id')}`,
      );
    }
  });
});
