# Exercice 3 : Navigation au clavier

Essayez d'accéder aux boutons et liens et d'enclencher les actions avec la touche `Entrée`.
Les personnes malvoyantes ne peuvent pas utiliser la souris, pour la simple raison qu'elles ne peuvent pas voir le curseur.

## Comment naviguer au clavier ?

Vous devez utiliser la touche TAB pour aller sur chaque élément recevant le focus : lien, bouton, champ de formulaire, menu, fenêtre de dialog.

Normalement, sur la page principale, vous devez voir tous les liens ou boutons se mettre en valeur.
Mais en naviguant avec la touche TAB, vous constatez que vous ne savez pas où vous êtes.

Votre mission est de trouver pourquoi.

Petite indice : allez dans le fichier [styles.scss](../style.scss)

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice3`

[Voir le test](../../tests/exercice3.spec.ts)
