# Réponses à l'exercice 9 : Structure de la page

## Solution

L'en-tête doit être intégré dans la balise `<header role="banner"></header>`.

Le menu principal doit être dans la balise `<nav role="navigation"></nav>`. On peut avoir plusieurs balises de navigation.

Le contenu principal est englobé sur la balise `<main role="main"></main>` et la `<main>` doit être unique.

Pour en savoir plus sur le pattern : [Landmarks Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/) (EN)

## Pourquoi la structure de la page est importante ?

Grâce aux landmarks, les personnes utilisant le lecteur d'écran peuvent aller directement à la zone concernée en utilisant des raccourcis : l'en-tête, la navigation, la page principale (main) ou le pied de page.

Avec les lecteurs d'écran NVDA et VoiceOver, on peut naviguer de titre en titre grâce aux raccourcis :

- Pour passer d'une zone à la suivante, appuyer sur la touche `D`
- Pour revenir à la zone précédente : appuyer sur les touches `Maj + D`

Sur NVDA, on peut afficher la liste de toutes les régions de la page :

- avec le raccourci `NVDA + F7`
- Puis choisir l'onglet **Repères** (ou Landmarks)
