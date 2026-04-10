# Exercice 3 : Navigation au clavier

Essayez de naviguer sur cette page… sans souris / trackpad :

Essayez d'accéder aux boutons et liens et d'enclencher les actions avec la touche **Entrée**.

Les personnes malvoyantes ne peuvent pas utiliser la souris, pour la simple raison qu'elles ne peuvent pas voir le curseur.

## Comment naviguer au clavier ?

Vous devez utiliser la touche **TAB** pour aller sur chaque élément recevant le focus : lien, bouton, champ de formulaire, menu, fenêtre de dialog.

Normalement, sur la page principale, vous devez voir tous les liens ou boutons se mettre en valeur.
Mais en naviguant avec la touche **TAB**, vous constatez que vous ne savez pas où vous êtes.

## Votre mission

Votre mission est de trouver pourquoi.

### Indice

Regardez du côté des styles : [styles.scss](../style.scss)

### Attention

Ne supprimez jamais le focus sans proposer une alternative visible.

## Avant de coder

- Naviguez avec TAB
- Essayez d’activer des éléments avec Entrée
- Observez ce qui ne va pas

## Corriger le test avec Playwright

Lancer la commande :

`npx playwright test exercice3`

[Voir le test](../../tests/exercice3.spec.ts)
