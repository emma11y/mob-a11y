import { test, expect } from '@playwright/test';
import { expectNoAxeViolations } from './utils';

// Definition of done
//-----------------
// 1: Détection d'erreur HTML 5
// 2: Lecteur d'écran

test.describe('Exercice 5: Langue', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits');
  });

  test('la page a la bonne langue', async ({ page }) => {
    const htmlLang = await page.getAttribute('html', 'lang');
    expect(htmlLang).toBe('fr');
  });

  test('le mot "Stickers" est entouré d’une balise span avec un attribut lang vers l\'anglais', async ({
    page,
  }) => {
    const spans = await page.$$('.hero-description [lang]');

    let stickersSpanHasBeenFound = false;
    for (const span of spans) {
      const text = await span.innerText();
      if (text.trim() === 'Stickers') {
        stickersSpanHasBeenFound = true;
        const lang = await span.getAttribute('lang');
        expect(lang).toBe('en');
      }
    }

    expect(stickersSpanHasBeenFound).toBe(true);
  });
});
