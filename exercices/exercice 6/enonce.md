# Exercice 6 : Les boutons et leurs labels sont-ils explicites ?

Avec un lecteur d’écran, vous parcourez les boutons de la page.

Certains posent problème :

- ils n’ont pas de libellé
- ou leur libellé n’est pas compréhensible hors contexte

Un bouton doit être compréhensible sans voir l’écran.

## Votre mission

Rendre les boutons suivants accessibles et explicites :

- afficher le panier
- fermer le panier
- ajouter le produit au panier
- supprimer un produit du panier

## Avant de coder

- Naviguez avec un lecteur d’écran en utilisant le raccourci **TAB**
- Écoutez les libellés annoncés
- Demandez-vous si l’action est claire sans contexte visuel

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice6`

[Voir le test](../../tests/exercice6.spec.ts)
