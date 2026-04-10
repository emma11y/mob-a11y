# Réponse à l'exercice 2 : Contrastes de couleur

## Règles d'accessibilité

Avec Playwright, on se base sur les règles internationales d’accessibilité (WCAG), qui sont alignées avec les règles françaises (RGAA).

### WCAG

Les Web Content Accessibility Guidelines (WCAG) sont un standard international développé par le W3C. Elles visent à rendre les contenus web accessibles aux personnes en situation de handicap, tout en améliorant l’expérience pour l’ensemble des utilisateur·ices.

Il existe trois niveaux de conformité :

- Niveau A : exigences minimales
- Niveau AA : niveau recommandé
- Niveau AAA : niveau le plus exigeant

Pour les contrastes de texte :

- Texte < 24px :
  - AA : minimum **4.5:1**
  - AAA : minimum **7:1**
- Texte ≥ 24px, ou ≥ 18.5px en gras :
  - AA : minimum **3:1**
  - AAA : minimum **4.5:1**

### RGAA

En France, le Référentiel général d’amélioration de l’accessibilité (RGAA) reprend ces principes avec une formulation légèrement différente.

Les règles principales :

- Texte sans gras < 24px : **4.5:1**
- Texte en gras < 18.5px : **4.5:1**
- Texte sans gras ≥ 24px : **3:1**
- Texte en gras ≥ 18.5px : **3:1**

## Ce que vérifiaient les tests

Les tests automatisés s’appuient sur Axe pour détecter les contrastes insuffisants.

Ils vérifient que :

- le contraste entre le texte et son arrière-plan respecte les seuils définis
- les éléments textuels restent lisibles dans différents contextes

Si le contraste est trop faible, la règle `color-contrast` échoue.

## Pourquoi c’est important

Un contraste insuffisant rend la lecture difficile, voire impossible, pour de nombreuses personnes :

- personnes malvoyantes
- personnes en situation de fatigue visuelle
- usage sur écran de mauvaise qualité ou en forte luminosité

Un bon contraste améliore la lisibilité pour tout le monde, dans tous les contextes.

## Bonnes pratiques

- Ne pas se fier uniquement au rendu visuel “à l’œil”
- Vérifier systématiquement les contrastes avec des outils
- Anticiper les contrastes dès la phase de design
- Éviter les combinaisons de couleurs trop proches

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
