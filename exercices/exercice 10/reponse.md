# Réponse à l'exercice 10 : Liste

## Solution

Structurer la liste de produits en liste.

Les suites d’éléments (items, liens, etc.) doivent être structurées en listes. Une structure de liste est impérative pour toutes les suites de liens. ([Critère 9.3 du RGAA](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.3))

Il y a deux manières de structurer une liste.

### UL / LI

Une liste d'éléments sans ordre particulier :

```html
<ul class="product-grid">
  <li class="product-card">Chat mignon</li>
  <li class="product-card">Soleil rétro</li>
</ul>
```

### Role LIST / LISTITEM

Si vous avez déjà des divs qui structurent votre liste, vous pouvez utiliser les attributs `role` avec les valeurs `list` et `listitem` :

```html
<div class="items" role="list">
  <div class="item" role="listitem">
    <div class="info">
      <div class="name">Chat mignon</div>
      <div class="qty">Quantité : 4</div>
    </div>
  </div>
  <div class="item" role="listitem">
    <div class="info">
      <div class="name">Soleil rétro</div>
      <div class="qty">Quantité : 2</div>
    </div>
  </div>
</div>
```

Le rôle `list` peut être utilisé pour identifier une liste d'éléments. Il est normalement utilisé en conjonction avec le rôle `listitem`, qui est utilisé pour identifier un élément de la liste.

N'utilisez `role="list"` et `role="listitem"` que si vous devez le faire — par exemple, si vous n'avez pas le contrôle sur votre code HTML mais que vous pouvez améliorer l'accessibilité de manière dynamique, après coup, grâce à JavaScript.

POur en savoir plus sur le role="list" : [ARIA : rôle list](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)

## Ce que vérifiant les tests

Les tests vérifiaient que :

- la liste de produits sont englobés dans les balises `<ul>` et `<li>`
- la liste de produits dans le panier sont englobés dans les attributs `role="list"` et `role="listitem"`

## Pourquoi c’est important

Les listes permettent aux personnes utilisant un lecteur d'écran de :

- naviguer directement aux listes
- d'accéder aux éléments suivants de la liste
- de savoir combien il y a d'éléments dans une liste
- éviter de parcourir tout le contenu linéairement

Sans liste claire, la navigation devient plus lente et confuse.

## Bonnes pratiques

- Utiliser les balises HTML5 natives (`ul` et `li`)
- Utiliser les roles (`list` et `listitem`) que quand vous n'avez pas le choix.

### Toolbox

Avec les lecteurs d'écran Orca, NVDA et VoiceOver, on peut entendre naviguer entre les listes.

**Bookmarklets :**

- [Lists booktmarklet](https://accessibility-bookmarklets.org/install.html)
- [A11y audit bookmarklets](https://a11y-tools.com/bookmarklets/)
