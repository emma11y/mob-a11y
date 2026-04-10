# Réponses à l'exercice 10 : Conditions RGPD

## Solutions

### TabIndex

Les erreurs communes sur les fenêtres modales sont à cause du `tabindex="-1"`.

L'attribut `tabindex` a deux valeurs :

- la valeur 0 permet de rendre l'élément focusable
- la valeur -1 enlève le focus de l'élément

Du coup, si votre modale a un `tabindex="-1"`, il y a des chances que vous soyez bloqués dans votre navigation.

Vous devez corriger de cette façon :
`<div role="dialog" tabindex="0">Ma fenêtre modale</div>`

En ajoutant `tabindex`, vous pouvez rendre focusable la fenêtre modale. Mais si vous mettez une mauvaise valeur comme `tabindex="-1"`, on va juste ignorer les boutons de la modale aussi bien par le clavier que par le lecteur d'écran. Si vous attribuez des chiffres comme `tabindex="3"`, vous pertubez l'ordre naturel de la navigation au clavier.

Nous le savons un `<div>` n'est pas focusable par défaut. On peut le remplacer par un élément natif HTML `<dialog></dialog>`.

### Le bouton nos 6 partenaires

Un bouton n'est pas un lien et un lien n'est pas un bouton. :)

Pourquoi créer un `<a role="button" href="javascript:alert('Voici la liste de nos 6 partenaires')"></a>` ?

Il suffit de créer un même style que le lien et lui attribuer une classe au bouton :
`<button type="button" class="link" onclick="javascript:alert('Voici la liste de nos 6 partenaires')"`

### Le bouton Continuer sans accepter

Deux erreurs à ne pas faire :

- mettre le code `SVG` dans `aria-label` sinon le lecteur d'écran **va vocaliser** tout le code SVG
- dupliquer le contenu du bouton dans l'`aria-label` : si le bouton est déjà explicite, on ne va pas mettre un `aria-label`

### Les icônes

On n'a pas besoin que le lecteur d'écran vocalise les icônes qui sont purement décoratifs. On va donc les cacher grâce à l'attribut `aria-hidden="true"` sur le `<svg>`

## Toolbox

**Tests automatisés :**

Sur la règle avec l'id `??`.

- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright with axe-core](https://playwright.dev/docs/accessibility-testing)
