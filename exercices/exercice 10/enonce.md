# Exercice 10 : Listes

Imaginez que vous avez une liste de produits mais que vous ne savez pas combien d'éléments il y a sans voir l'écran.

Vous utilisez un lecteur d'écran pour vous déplacer rapidement dans les listes de la page.

Mais ici... sur la page produit, quelque chose ne va pas.

On ne peut pas accéder directement à la liste de produits.

## Votre mission

Tranformer une liste de produits en une vraie liste de produits en HTML.

### Avant de code

Essayer de naviguer avec un lecteur d'écran sur cette page : [http://localhost:5173/produits](http://localhost:5173/produits)

On peut naviguer de région en région grâce aux rassourcis :

| Outil       | Zone suivante                     | Zone précédente |
| ----------- | --------------------------------- | --------------- |
| NVDA & Orca | `L`                               | `Shift + L`     |
|             | `I` (Element suivant de la liste) | `Shift + I`     |
| VoiceOver   | `Ctrl + Option + Command + X`     |                 |

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice10`

[Voir le test](../../tests/exercice10.spec.ts)
