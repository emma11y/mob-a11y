# Exercice 01 : Pour commencer doucement : Titres

Imaginez arriver sur la page **Produits** avec un lecteur d’écran.

Vous cherchez à comprendre rapidement : “De quoi parle cette page ?”

Mais problème… son titre n’est pas correctement défini.

Résultat :

- impossible de naviguer efficacement
- la structure de la page est floue
- l’information principale est difficile à trouver

## Votre mission

- Corriger le titre :

"Des autocollants qui vous collent à la peau."

En lui attribuant le bon niveau de **heading**.

- Ensuite, attribuer les titres aux noms des produits.

## Avant de coder

- Inspectez le DOM
- Essayez de naviguer par titres avec un lecteur d’écran

Avec les lecteurs d'écran NVDA ou Orca, on peut naviguer de titre en titre grâce aux raccourcis :

- Pour passer d'un titre au suivant, appuyer sur la touche `H` comme _heading_
- Pour revenir au titre précédent : appuyer sur les touches `Shift + H`.

Avec VoiceOver : `Ctrl + Option + H`

## Corriger le test avec Playwright

Lancer la commande :

`npx playwright test exercice01`

[Voir le test](../../tests/exercice01.spec.ts)

### Playwright

Pour lancer plus facilement les tests avec Playwright, vous pouvez
installer l'extension [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
