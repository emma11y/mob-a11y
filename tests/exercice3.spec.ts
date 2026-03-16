import { test, expect } from '@playwright/test';
import {
  expectNoAxeViolations,
  expectNoColorContrastViolations,
} from './utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Navigation clavier
// 4: Lecteur d'écran

test.describe('Exercice 3 : Navigation au clavier', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
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

  test('Focus clavier applique le style :focus-visible', async ({ page }) => {
    const interactiveElements = await page
      .locator('button, a')
      .elementHandles();

    for (const el of interactiveElements) {
      await el.focus();

      const hasFocusVisible = await el.evaluate((element) => {
        const style = window.getComputedStyle(element, ':focus-visible');
        return style.outlineStyle !== 'none' && style.outlineWidth !== '0px';
      });

      expect(hasFocusVisible).toBe(true);
    }
  });
});
