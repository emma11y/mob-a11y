# Exercice 10 : Notifications (ou messages d'alertes)

Souvent, les personnes aveugles et malvoyantes ne reçoivent pas les messages d'alerte.

Comment peuvent-elles savoir que le produit a bien été ajouté dans le panier, retiré du panier ou encore si le formulaire a été correctement soumis ou non ?

## Votre mission

Rendre les notifications accessibles par le lecteur d'écran

## Avant de coder

**Testez avec un lecteur d'écran**

Il y a, sur ce site, quatre notifications :

- lorsqu'on ajoute le produit dans le panier
- lorsqu'on retire le produit du panier
- lorsqu'on soumet le formulaire en erreur
- lorsqu'on soumet le formulaire avec succès

## Astuce

Le composant alert se trouve dans le fichier [layout](../../src/layout.html)

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice10`

[Voir le test](../../tests/exercice10.spec.ts)
