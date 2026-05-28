import { test, expect, ElementHandle } from '@playwright/test';
import { getElementInfos } from './utils/debug-utils';

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

  test('Tous les boutons et liens doivent avoir le pseudo-class :focus-visible', async ({
    page,
  }) => {
    const visited = new Set<string>();

    while (true) {
      await page.keyboard.press('Tab');

      const active = (await page.evaluateHandle(
        () => document.activeElement,
      )) as ElementHandle<HTMLElement>;

      const info = await getElementInfos(active);

      // ignore les éléments non interactifs
      if (info.tag !== 'BUTTON' && info.tag !== 'A') continue;

      const uniqueId = `${info.tag}:${info.id}:${info.className}`;
      if (visited.has(uniqueId)) break;
      visited.add(uniqueId);

      console.log(
        `Élément focus : "${info.text}" | selector: ${uniqueId} | outline: ${info.outlineStyle} ${info.outlineWidth}`,
      );

      const hasVisibleFocus =
        info.outlineStyle !== 'none' && info.outlineWidth !== '0px';

      if (!hasVisibleFocus) {
        throw new Error(
          `L'élément "${info.text}" avec selector "${uniqueId}" n'a pas de focus visible (outlineStyle: ${info.outlineStyle}, outlineWidth: ${info.outlineWidth})`,
        );
      }
    }
  });
});
