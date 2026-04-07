# Réponse à l'exercice 2 Contrastes de couleur

## Règles d'accessibilité

Avec Playwright, on va se baser sur les règles internationales d'accessibilité (WCAG) qui sont les mêmes que les règles françaises (RGAA).

### WCAG

[Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/fr) (WCAG) est un standard international développé par le W3C. Elles visent à rendre les contenus web accessibles aux personnes handicapées tout en améliorant l'expérience pour tous les utilisateurs et utilisatrices.

Il y a trois niveaux :

- Niveau A : exigences minimales
- Niveau AA : niveau recommandé
- Niveau AAA : niveau le plus exigeant

Si le texte a une taille inférieure à 24px alors le ratio doit être au moins **4.5:1** pour le niveau AA ou **7:1** pour le niveau AAA.
Si le texte a une taille supérieure à 24px ou s'il est en gras avec une taille supérieure à 18,5px, le ratio doit être au moins **3:1** pour le niveau AA ou **4.5:1** pour le niveau AAA.

### RGAA

En France, nous avons le [Référentiel général d'amélioration de l'accessibilité](https://accessibilite.numerique.gouv.fr/) (RGAA).

Si on se base sur les critères [RGAA](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3), les ratio sont différents :

- le rapport de contraste entre le texte **sans gras et ayant une taille inférieure de 24px** et son arrière-plan est de **4.5:1**
- le rapport de contraste entre le texte **en gras et ayant une taille inférieure à 18,5px** et son arrière-plan est de **4.5:1**
- le rapport de contraste entre le texte **sans gras et ayant une taille supérieure de 24px** et son arrière-plan est de **3:1**
- le rapport de contraste entre le texte **en gras et ayant une taille supérieure à 18,5px** et son arrière-plan est de **3:1**

## Toolbox

**Design :**

- [Tanaguru contrast finder](https://contrast-finder.tanaguru.com/)
- [Contrast checker](https://webaim.org/resources/contrastchecker/)

**Extension de navigateur :**

WCAG Color contrast checker

- [Chrome](https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf)
- [Firefox](https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/)

**Tests automatisés :**

Sur la règle avec l'id `color-contrast`.

- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright with axe-core](https://playwright.dev/docs/accessibility-testing)
