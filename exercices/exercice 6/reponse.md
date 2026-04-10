# Réponse à l'exercice 6 : Libellés explicites

Un bouton ou un lien ne doit pas seulement avoir une icône.

Les icônes ne sont pas correctement restitués au lecteur d'écran, c'est pourquoi lorsqu'on a un `<svg>` ou `<i>`, on met l'attribut `aria-hidden="true"` pour que cet élément ne soit pas vocalisable au lecteur d'écran.

C'est pourquoi on doit aussi ajouter

```html
<span class="sr-only>Libellé</span>
```

On vous invite à lire l'article [Title, ce faux ami de l’accessibilité](https://www.24joursdeweb.fr/2025/title-ce-faux-ami-de-l-accessibilite) rédigé par François-Xavier Lair sur 24 jours de web.

On aborde l'attribut ARIA dans l'exercice suivant. L'attribut `aria-hidden="true"` permet de ne pas restituer vocalement l'élément.

## Solution

Ajouter un libellé textuel aux boutons et liens, même lorsqu’ils sont représentés uniquement par une icône.

Pour les icônes (`<svg>`, `<i>`, etc.), les masquer aux technologies d’assistance :

```html
<svg aria-hidden="true"></svg>
```

Puis ajouter un texte accessible, par exemple avec une classe utilitaire :

```html
<button>
  <svg aria-hidden="true"></svg>
  <span class="sr-only">Afficher le panier</span>
</button>
```

## Ce que vérifiaient les tests

Les tests vérifiaient que :

- chaque bouton et lien possède un **nom accessible**
- les icônes ne sont pas vocalisées (`aria-hidden="true"`)
- un texte alternatif est présent via un élément `.sr-only`
- les libellés sont **explicites et différenciés** selon le contexte

## Pourquoi c’est important

Les lecteurs d’écran ne restituent pas correctement les icônes seules.

Sans libellé :

- un bouton peut être annoncé comme “bouton” sans contexte
- plusieurs boutons identiques deviennent impossibles à distinguer

Si tous les boutons ont le même libellé, comment savoir quel produit ajouter dans le panier ? Quel produit supprimer ?

## Bonnes pratiques

- Toujours fournir un texte accessible pour les boutons et liens
- Masquer les éléments décoratifs avec `aria-hidden="true"`
- Utiliser une classe comme `.sr-only` pour les textes non visibles
- Rendre les libellés spécifiques au contexte (ex : inclure le nom du produit)
- Éviter les libellés génériques répétés

### À noter

Les attributs `title` et `aria-label` peuvent être utilisés, mais présentent certaines limites en accessibilité.

Un contenu textuel directement dans le DOM reste la solution la plus robuste.

## Toolbox

**Lecteur d'écran**

Avec les lecteurs d'écran NVDA et VoiceOver, on peut naviguer entre les liens et boutons avec les touches **Tab**.

**Tests automatisés :**

Sur la règle avec les id `link-name`, `link-in-text-block`, `button-name`

- [axe-core](https://github.com/dequelabs/axe-core)
- [Playwright with axe-core](https://playwright.dev/docs/accessibility-testing)
