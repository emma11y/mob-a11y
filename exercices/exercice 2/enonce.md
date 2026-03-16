# Exercice 2 : Contrastes de couleur

## Qu'est-ce qu'un contraste de couleur ?

La lisibilité du texte dépend du contraste de couleur, c’est-à-dire de la différence de luminosité perçue entre le texte et son fond.

Ce contraste se mesure mathématiquement selon des normes d'accessibilité une échelle de 1:1 (aucun contraste) à 21:1 (contraste maximum).
Plus la différence est grande, plus le contraste est fort et la lecture est claire.

## Comment tester ?

### Extension WCAG Color contrast

Vous pouvez utiliser l'extension WCAG Color contrast checker sur [Chrome](https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf) ou [Firefox](https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/) pour détecter plus facilement les soucis de contraste.

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice2`

[Voir le test](../../tests/exercice2.spec.ts)
