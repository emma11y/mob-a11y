# Réponses à l'exercice 8 : Images

## L'attribut ALT

L'attribut `alt` sur les `<img>` permet de décrire les images. Grâce à cet attribut, les personnes aveugles et malvoyantes peuvent identifier le produit en fonction des descriptions qui leur sont données.

Les descriptions doivent être les plus précises possibles.

**Tout visuel contenant des informations doit avoir une alternative textuelle.**

### Exception

L'exception concerne les éléments graphiques purement décoratifs, comme les logos par exemple.

Si un élément ne porte aucune information pertinente, on met l'attribut `alt` vide : `<img alt="">`. Le lecteur d'écran va dire que c'est un élément décoratif.

## Toolbox

**Lecteur d'écran**

Avec les lecteurs d'écran NVDA et VoiceOver, on peut entendre les alternatives textuelles aux images.

**Tests automatisés :**

Sur la règle avec les id `image-alt`, `image-redundant-alt`

- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright with axe-core](https://playwright.dev/docs/accessibility-testing)

**Bookmarklets :**

- [Images booktmarklet](https://accessibility-bookmarklets.org/install.html)
