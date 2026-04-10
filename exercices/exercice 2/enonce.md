# Exercice 2 : Contrastes

Vous êtes sur votre téléphone, en plein soleil.

Ou peut-être avez-vous une déficience visuelle.

Dans tous les cas… certains textes de cette page sont difficiles à lire.

Pourquoi ? Le contraste de couleur est insuffisant.

## Votre mission

Améliorer les contrastes pour rendre le contenu lisible par tous·es.

## Avant de coder

- Essayez de lire la page rapidement : qu’est-ce qui vous pose problème ?
- Utilisez un outil pour mesurer le contraste

**Extension WCAG Color contrast**

- [Chrome](https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf)
- [Firefox](https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/)

## À savoir

Qu'est-ce qu'un contraste de couleur ?

La lisibilité du texte dépend du contraste de couleur, c’est-à-dire de la différence de luminosité perçue entre le texte et son fond.

Ce contraste se mesure mathématiquement selon des normes d'accessibilité une échelle de **1:1** (aucun contraste) à **21:1** (contraste maximum).
Plus la différence est grande, plus le contraste est fort et la lecture est claire.

## Corriger le test avec Playwright

Lancer la commande :

`npx playwright test exercice2`

[Voir le test](../../tests/exercice2.spec.ts)
