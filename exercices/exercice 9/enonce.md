# Exercice 9 : La page doit être structurée grâce aux régions

Imaginez naviguer sur ce site sans voir l’écran.

Vous utilisez un lecteur d’écran pour vous déplacer rapidement entre les grandes zones de la page :

- le header
- la navigation
- le contenu principal
- le footer

Mais ici… quelque chose ne va pas.

Impossible de comprendre la structure de la page.
Les repères sont absents ou mal définis.

Résultat : les régions sont introuvables.

## Votre mission

Rendre la structure de la page compréhensible grâce aux **landmarks**.

Attention :

- certaines régions doivent être **uniques**
- d'autres peuvent être **multiples** mais bien utilisées

## Avant de coder

Essayez de naviguer avec un lecteur d’écran sur cette page : [http://localhost:5173/produits-avec-cookies](http://localhost:5173/produits-avec-cookies)

On peut naviguer de région en région grâce aux raccourcis :

- NVDA
  -- Pour passer d'une zone à la suivante, appuyer sur la touche `D`
  -- Pour revenir à la zone précédente : appuyer sur les touches `Maj + D`
- VoiceOver
  -- Pour passer d'une zone à la suivante, appuyer sur la touche `W`
  -- Pour revenir à la zone précédente : appuyer sur les touches `Maj + W`

On peut afficher la liste de toutes les régions de la page :

- NVDA
  -- avec le raccourci `NVDA + F7`
  -- Puis choisir l'onglet **Repères** (ou Landmarks)
- VoiceOver
  -- avec le raccourci `CTRL + Option + U`, ouvrir le rotor
  -- choisir **Repères**
  -- flèches bas et haut pour naviguer

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice9`

[Voir le test](../../tests/exercice9.spec.ts)
