# Réponse à l'exercice 9 : Structure de la page

## Solution

Structurer la page à l’aide des éléments sémantiques HTML5 (**landmarks**) :

- En-tête : `<header>`
- Navigation : `<nav>`
- Contenu principal : `<main>`
- Pied de page : `<footer>`

Exemple :

```html
<header role="banner"></header>

<nav role="navigation"></nav>

<main role="main"></main>

<footer role="contentinfo"></footer>
```

Chaque rôle correspond à une zone de navigation pour les technologies d’assistance.

## Ce que vérifiaient les tests

Les tests vérifiaient que :

- il existe exactement un `<header>` (banner)
- il existe au moins une navigation (`nav`)
- il existe exactement un `<main>`
- il existe un footer (`contentinfo`)
- la structure respecte les [règles de landmarks](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/) sans duplication ni conflit

## Pourquoi c’est important

Les landmarks permettent aux personnes utilisant un lecteur d’écran de :

- comprendre rapidement la structure de la page
- naviguer directement à une zone spécifique
- éviter de parcourir tout le contenu linéairement

Sans structure claire, la navigation devient beaucoup plus lente et confuse.

## Bonnes pratiques

- Utiliser les balises HTML5 natives (`header`, `nav`, `main`, `footer`)
- Ne pas multiplier les rôles identiques inutilement
- S’assurer qu’il n’y a qu’un seul `<main>`
- Structurer la page de façon cohérente et stable
- Ne pas utiliser `role` si la balise HTML sémantique existe déjà

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
