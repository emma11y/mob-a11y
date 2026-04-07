# Réponses à l'exercice 7 : Formulaire

## L'attribut FOR

Pour que les libellés des champs soient restitués par le lecteur d'écran, il est nécessaire de mettre l'attribut `for` portant le même ID de son `input`.

Exemple :

```HTML
<label for="txtNom">Nom</label>
<input type="text" id="txtNom" />
```

Il est important que le libellé **soit visible en dehors du champ**. Mettre le libellé en `placeholder` n'est pas une solution accessible car une personne - ayant un handicap intellectuel par exemple - va oublier ce qu'elle est censée remplir.

## Les attributs ARIA

### Qu'est ce qu'est ARIA ?

Pour que les erreurs soient correctement restitués, on a besoin des attributs ARIA.

[ARIA](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA) signifie Accessible Rich Internet Applications. C'est une spécification qui propose la possibilité de définir, sur les composants simples et riches, une description des rôles, des états et des propriétés, de manière à ce qu’ils soient reconnaissables et utilisables par les utilisateurs et utilisatrices de technologies d’assistance.

Avec les attributs ARIA, on permet de faciliter la navigation au clavier et la restitution des informations via le lecteur d’écran.

[Quelques des règles ARIA](https://dev.to/mikekennedydev/the-5-rules-of-aria-1mn) essentielles à appliquer :

- No ARIA is better than bad ARIA - Ne pas utiliser d'ARIA est mieux qu'utiliser du mauvais ARIA.
- Priviligiez un attribut HTML plutôt qu'un attribut ARIA

Utiliser ARIA à mauvais escient peut nuire à l'accessibilité numérique de votre site internet.

Par exemple :
`<div role="button">Mon faux bouton</div>`
Si vous lui donnez juste un rôle sur ce bouton pour dire que c'est un bouton, il ne sera pas accessible car le div n'est pas focusable naturellement.

`<div role="button" tabindex="0">Mon faux bouton</div>`
En ajoutant `tabindex`, vous pouvez le rendre focusable. Mais si vous mettez une mauvaise valeur comme `tabindex="-1"`, on va juste ignorer le bouton aussi bien par le clavier que par le lecteur d'écran. Si vous attribuez des chiffres comme `tabindex="3"`, vous pertubez l'ordre naturel de la navigation au clavier.

Pour éviter de mettre des propriétés comme `role` et `tabindex`, mettez un élément natif tout simplement :
`<button type="button">Mon vrai bouton</button>`.
Cet élément HTML est naturellement accessible et focusable.
En faisant ce vrai bouton, j'applique les deux règles ARIA citées plus haut.

### L'usage d'aria-invalid et aria-describedBy

Voici un exemple d'usage ARIA qu'on peut utiliser pour restituer les messages d'erreurs.

On va utiliser `aria-invalid` pour restituer que le champ est invalide et `aria-describedBy` pour vocaliser le message d'erreur associé au champ.

```HTML
<label for="txtNom">Nom</label>
<input type="text" id="txtNom" aria-invalid="true" aria-describedBy="error-Nom" />
<p id="error-Nom">Le champ Nom est obligatoire</p>
```

## Toolbox

**Tests automatisés :**

Sur la règle avec les id `label`, `label-title-only`, `form-field-multiple-labels`, `input-button-name`, `select-name`, `textarea-name`, `aria-input-field-name`,

- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright with axe-core](https://playwright.dev/docs/accessibility-testing)

**Bookmarklets :**

- [Forms booktmarklet](https://accessibility-bookmarklets.org/install.html)
