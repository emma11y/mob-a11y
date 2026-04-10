# Réponses à l'exercice 9 : Structure de la page

## Solution

L'en-tête doit être intégré dans la balise `<header role="banner"></header>`.

Le menu principal doit être dans la balise `<nav role="navigation"></nav>`. On peut avoir plusieurs balises de navigation.

Le contenu principal est englobé sur la balise `<main role="main"></main>` et la `<main>` doit être unique.

Pour en savoir plus sur le pattern : [Landmarks Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/) (EN)

## Pourquoi la structure de la page est importante ?

Grâce aux landmarks, les personnes utilisant le lecteur d'écran peuvent aller directement à la zone concernée en utilisant des raccourcis : l'en-tête, la navigation, la page principale (main) ou le pied de page.

### Toolbox

**Lecteur d'écran**

Avec les lecteurs d'écran NVDA et VoiceOver, on peut entendre naviguer entre les régions.

**Tests automatisés :**

Sur la règle avec les id `region`, `landmark-one-main`, `landmark-no-duplicate-banner`, `landmark-no-duplicate-contentinfo`, `landmark-unique`

- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright with axe-core](https://playwright.dev/docs/accessibility-testing)

**Extensions de navigateur web :**

Landmark Navigation sur

- [Chrome](https://chromewebstore.google.com/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/landmarks/)

**Bookmarklets :**

- [Landmarks booktmarklet](https://accessibility-bookmarklets.org/install.html)
- [A11y audit bookmarklets](https://a11y-tools.com/bookmarklets/)
