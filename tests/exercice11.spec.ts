import { expect, test } from '@playwright/test';

// Definition of done
// ------------------
// 1: Détection d'erreur HTML 5
// 2: Détection d'erreur WAI-ARIA
// 3: Lecteur d'écran

test.describe('Exercice 11 : Conditions RGPD', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/produits-avec-cookies');
  });

  test('Les boutons et liens de la fenêtre modale doivent avoir le focus', async ({
    page,
  }) => {
    const buttons = [
      page.getByTestId('partner'),
      page.getByTestId('more'),
      page.getByTestId('disagree'),
      page.getByTestId('agree'),
    ];

    for (const element of buttons) {
      await page.keyboard.press('Tab');
      await expect(element).toBeFocused();
    }

    const consentement = page.getByTestId('consentement');
    await expect(consentement).toHaveAttribute('tabindex', '0');
  });

  test('Le lien doit être un bouton', async ({ page }) => {
    const partner = page.getByTestId('partner');
    const partnerTagName = await partner.evaluate((node) => node.tagName);
    expect(partnerTagName).toBe('BUTTON');
  });

  test(`Les boutons ne doivent pas avoir d'aria-label`, async ({ page }) => {
    const buttons = [
      page.getByTestId('more'),
      page.getByTestId('disagree'),
      page.getByTestId('agree'),
    ];

    for (const element of buttons) {
      const ariaLabel = await element.getAttribute('aria-label');

      if (ariaLabel) {
        const label = await element.innerText();
        console.log('ariaLabel', ariaLabel);
        console.log('label', label);
        if (ariaLabel.includes(label)) {
          throw new Error('Les libellés sont identiques');
        }
      }

      await expect(element).not.toHaveAttribute('aria-label');
    }
  });

  test(`Les icônes doivent être cachés aux lecteurs d'écran`, async ({
    page,
  }) => {
    const svgs = page.getByTestId('consentement').locator('svg');

    await expect(svgs).toHaveCount(2);

    const count = await svgs.count();
    for (let i = 0; i < count; i++) {
      const svg = svgs.nth(i);
      await expect(svg).toHaveAttribute('aria-hidden', 'true');
    }
  });
});
