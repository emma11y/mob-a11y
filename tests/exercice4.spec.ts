import { test, expect, Locator } from '@playwright/test';

// Definition of done
// ------------------
// 1: Détection d'erreur HTML 5
// 2: Navigation clavier
// 3: Lecteur d'écran

test.describe('Exercice 4 : Boutons et liens', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test("Le bouton d'ouverture du panier doit être un <button>", async ({
    page,
  }) => {
    const toggle = await page.getByTestId('cart-toggle');

    await expect(await toggle.evaluate((node) => node.tagName)).toBe('BUTTON');
  });

  test("Les boutons d'ajout dans le panier doivent être des <button>", async ({
    page,
  }) => {
    const buttons = await page.getByTestId('add-to-cart');

    await expect(buttons).toHaveCount(6);

    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await checkTagHtml(buttons.nth(i), 'BUTTON');
    }
  });

  test('Le bouton de fermeture du panier doit être un <button>', async ({
    page,
  }) => {
    await page.getByTestId('cart-toggle').click();

    const cart = await page.locator('id=cart');
    const toggle = await cart.getByTestId('cart-close');

    await checkTagHtml(toggle, 'BUTTON');
  });

  test('Les boutons de suppression d\élément dans le panier doivent être des <button>', async ({
    page,
  }) => {
    await page.getByTestId('add-to-cart').first().click();
    await page.getByTestId('cart-toggle').click();

    const cart = page.locator('id=cart');
    const buttons = cart.getByTestId('cart-remove');

    await expect(buttons).toHaveCount(1);

    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await checkTagHtml(buttons.nth(i), 'BUTTON');
    }
  });

  test('Le lien pour payer doit être un <a>', async ({ page }) => {
    await page.getByTestId('add-to-cart').first().click();
    await page.getByTestId('cart-toggle').click();

    const cart = await page.locator('id=cart');
    const cta = await cart.getByText('Payer');

    await checkTagHtml(cta, 'A');
  });

  async function checkTagHtml(locator: Locator, expected: string) {
    await expect(await locator.evaluate((node) => node.tagName)).toBe(expected);
  }

  test('Pas de div role=button', async ({ page }) => {
    const divButtons = await page
      .locator('div[role="button"]')
      .elementHandles();
    expect(divButtons.length).toBe(0);
  });
});
