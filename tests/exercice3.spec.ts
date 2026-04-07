import { test, expect, ElementHandle } from '@playwright/test';
import { getElementSelector, logElementInfos } from './utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Navigation clavier
// 4: Lecteur d'écran

test.describe('Exercice 3 : Navigation au clavier', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('Tous les boutons et liens doivent être focusables via la touche Tab', async ({
    page,
  }) => {
    const interactiveElements = await page
      .locator('button, a')
      .elementHandles();

    for (const el of interactiveElements) {
      await el.focus();

      const isFocused = await page.evaluate(
        (el) => document.activeElement === el,
        el,
      );
      expect(isFocused).toBe(true);
    }
  });

  test('Focus clavier visible sur les éléments interactifs', async ({
    page,
  }) => {
    const interactiveElements = await page.locator('button, a').all();

    for (const el of interactiveElements) {
      await page.keyboard.press('Tab');

      await logElementInfos(el);

      const isFocused = await el.evaluate(
        (element) => element === document.activeElement,
      );

      if (!isFocused) continue;

      const hasVisibleFocus = await el.evaluate((element) => {
        const style = window.getComputedStyle(element);

        return style.outlineStyle !== 'none' && style.outlineWidth !== '0px';
      });

      expect(
        hasVisibleFocus,
        `L'élément "${(await el.innerText()).trim()}" avec sélecteur ${await getElementSelector(
          el,
        )} ne possède pas de focus visible`,
      ).toBe(true);
    }
  });
});
