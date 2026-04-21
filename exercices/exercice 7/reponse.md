# Réponse à l'exercice 7 : Images

## Solution

Ajouter un attribut `alt` pertinent sur chaque image :

```html
<img src="produit.jpg" alt="Autocollant en forme de chat noir" />
```

Le texte alternatif doit décrire l’information utile portée par l’image.

Pour les images décoratives, utiliser un `alt` vide :

```html
<img src="decoration.png" alt="" />
```

Une image décorative est une image qui n’apporte aucune information utile au contenu : elle sert uniquement à l’illustration visuelle et sa suppression ne change rien à la compréhension de la page (par exemple : motifs, séparateurs, photos d’ambiance). Dans ce cas, on utilise `alt=""` pour qu’elle soit ignorée par les lecteurs d’écran.

Pour en savoir plus sur l'attribut alt sur [MDN](https://developer.mozilla.org/fr/docs/Web/API/HTMLImageElement/alt)

## Ce que vérifiaient les tests

Les tests vérifiaient que :

- chaque image possède un attribut `alt`
- les alternatives textuelles ne sont pas redondantes ou inutiles
- aucune violation Axe sur les règles liées aux images

## Pourquoi c’est important

Les personnes aveugles ou malvoyantes utilisent des lecteurs d’écran pour comprendre le contenu.

Sans texte alternatif :

- l’image est ignorée ou mal interprétée
- une information importante peut être perdue

Le `alt` permet de transmettre cette information sous forme textuelle.

## Bonnes pratiques

- Décrire l’information utile, pas nécessairement l’image en détail
- Adapter la description au contexte (produit, illustration, contenu)
- Éviter les formulations inutiles comme "image de..."
- Utiliser `alt=""` pour les images purement décoratives
- Ne pas répéter un texte déjà présent à proximité

## Toolbox

**Lecteur d'écran**

Avec les lecteurs d'écran NVDA et VoiceOver, on peut entendre les alternatives textuelles aux images.

**Tests automatisés :**

Sur la règle avec les id `image-alt`, `image-redundant-alt`

- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright with axe-core](https://playwright.dev/docs/accessibility-testing)

**Bookmarklets :**

- [Images booktmarklet](https://accessibility-bookmarklets.org/install.html)
