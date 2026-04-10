# Réponse à l'exercice 7 : Formulaire

## Solution

Associer correctement chaque champ de formulaire à son libellé grâce à l’attribut `for` :

```html
<label for="txtNom">Nom</label> <input type="text" id="txtNom" />
```

Le `for` du `<label>` doit correspondre exactement à l’`id` de l’input.

Le libellé doit être **visible** et ne pas être remplacé par un `placeholder`.

## Ce que vérifiaient les tests

Les tests vérifiaient que :

- chaque champ possède un label associé (`for` + `id`)
- les labels et inputs correspondent correctement
- les erreurs sont détectées et restituées
- les attributs ARIA sont correctement utilisés
- aucune violation Axe sur les règles liées aux formulaires

## Pourquoi c’est important

Sans label correctement associé :

- un lecteur d’écran ne peut pas annoncer le rôle du champ
- l’utilisateur·ice ne sait pas quoi saisir
- la navigation dans le formulaire devient confuse

Un `placeholder` seul ne suffit pas :

- il disparaît lors de la saisie
- il n’est pas toujours restitué correctement
- il augmente la charge cognitive

## Les attributs ARIA

### Principe

[ARIA](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA) signifie _Accessible Rich Internet Applications_.

C'est une spécification qui propose la possibilité de définir, sur les composants simples et riches, une description des rôles, des états et des propriétés, de manière à ce qu’ils soient reconnaissables et utilisables par les utilisateur·ices de technologies d’assistance.

Avec les attributs ARIA, on permet de faciliter la navigation au clavier et la restitution des informations via le lecteur d’écran.

[Quelques règles ARIA](https://dev.to/mikekennedydev/the-5-rules-of-aria-1mn) sont essentielles à appliquer :

- Ne pas utiliser ARIA quand HTML 5 suffit
- **No ARIA is better than bad ARIA**: Un mauvais usage d’ARIA peut dégrader l’accessibilité

Exemple à éviter :

```html
<div role="button">Mon faux bouton</div>
```

Si vous ajoutez un `role` pour indiquer que c'est un bouton, il ne sera quand même pas accessible, car un `<div>` n'est pas _focusable_ naturellement.

Préférer :

```html
<button type="button">Mon vrai bouton</button>
```

Cet élément HTML est naturellement accessible et focusable.

Cet exemple applique les deux règles ARIA citées plus haut.

### Gestion des erreurs

Pour restituer les erreurs de formulaire :

- `aria-invalid="true"` indique qu’un champ est invalide
- `aria-describedby` permet de lier un message d’erreur

Exemple :

```html
<label for="txtNom">Nom</label>
<input
  type="text"
  id="txtNom"
  aria-invalid="true"
  aria-describedby="error-txtNom"
/>
<p id="error-txtNom">Le champ Nom est obligatoire</p>
```

## Bonnes pratiques

- Toujours associer un label visible à chaque champ
- Ne pas utiliser le `placeholder` comme label
- Utiliser les éléments HTML natifs en priorité
- Ajouter ARIA uniquement si nécessaire
- Lier explicitement les messages d’erreur aux champs

## Toolbox

**Tests automatisés :**

Sur la règle avec les id `label`, `label-title-only`, `form-field-multiple-labels`, `input-button-name`, `select-name`, `textarea-name`, `aria-input-field-name`, `aria-valid-attr`, `aria-valid-attr-value`

- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright with axe-core](https://playwright.dev/docs/accessibility-testing)

**Bookmarklets :**

- [Forms bookmarklet](https://accessibility-bookmarklets.org/install.html)
