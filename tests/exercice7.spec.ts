import { test, expect } from '@playwright/test';
import { printButtonLinkViolations } from './utils';

// Definition of done
// ------------------
// 1: Détection d'erreurs automatiques avec Axe
// 2: Détection d'erreur HTML 5
// 3: Lecteur d'écran

test.describe('Exercice 7 : Les champs des formulaires doivent avoir des étiquettes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/finaliser-votre-commande');
  });

  test('', async ({ page }) => {});
});
