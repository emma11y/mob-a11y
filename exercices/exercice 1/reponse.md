# Réponse à l'exercice 1

## Solution

On met l'attribut `<h2>` sur le titre **Des autocollants qui vous collent à la peau.** car nous avons déjà un titre de niveau 1 : **STICKR**.

## Pourquoi la hiérarchie des titres est importante ?

Une hiérarchie de titres structurée est fondamentale pour l'accessibilité et le SEO, car elle permet aux personnes utilisant le lecteur d'écran de naviguer efficacement : au lieu d'écouter le contenu linéairement, elles peuvent passer directement d'un titre à l'autre pour se repérer et accéder rapidement à l'information qui les intéresse.

- Pensez à la hiérarchie des titres comme une table des matières ou à un sommaire : `h1` > `h2` > `h3` > `h4` > `h5` > `h6`
- Il ne peut y avoir un trou entre `h1` et `h3` car cela casse la navigation de titres en titres.
- N'utilisez pas le heading pour styler le titre.

### Lecteurs d'écrans

Avec les lecteurs d'écran NVDA et VoiceOver, on peut naviguer de titre en titre grâce aux raccourcis :

- Pour passer d'un titre au suivant, appuyer sur la touche **H** comme _heading_
- Pour revenir au titre précédent : appuyer sur les touches Maj + H.

## Toolbox

Outils intéressants à ajouter dans votre toolbox de dev accessibilité :

**Extensions de navigateur web :**

- [HeadingsMap](https://www.accessibility-developer-guide.com/setup/helper-tools/browser-extensions/headingsmap/)

**Bookmarklets :**

- [Headings booktmarklet](https://accessibility-bookmarklets.org/install.html)
