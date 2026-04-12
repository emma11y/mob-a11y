# Exercice 11 : Conditions RGPD

Comme dans chaque site de e-commerce, on trouve des modales pour accepter les conditions RGPD.
Mais souvent, les personnes utilisatrices naviguant au clavier se retrouvent bloquées.

Essayez de naviguer au clavier :

- le focus ne semble pas contrôlé
- vous ne pouvez pas sortir de la modale
- certaines actions sont inaccessibles

Ce type de problème est courant et peut bloquer complètement l’accès à un service.

Cet exemple est inspiré d’un témoignage de [Luca CHAPITEAU](https://www.linkedin.com/posts/lucaenlive_accessibilitaeznumaezrique-inclusion-ux-activity-7447936694957486080-2Wq_/), une personne aveugle confrontée à ce type de blocage et n'a pas pu prendre RDV chez le coiffeur.

Nous avons repris le code HTML qui existait sur le site dénoncé par Luca.

## Votre mission

Rendre cette modale accessible :

- navigation clavier fonctionnelle
- focus correctement géré
- actions compréhensibles

## Avant de coder

- Testez avec le clavier uniquement
- Testez avec un lecteur d’écran
- Essayez d’ouvrir, parcourir et fermer la modale

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice11`

[Voir le test](../../tests/exercice11.spec.ts)
