# Réponse à l'exercice 6 : Libellés explicites

Un bouton ou un lien ne doit pas seulement avoir une icône.

Les icônes ne sont pas correctement restitués au lecteur d'écran, c'est pourquoi lorsqu'on a un `<svg>` ou `<i>`, on met l'attribut `aria-hidden="true"` pour que cet élément ne soit pas vocalisable au lecteur d'écran.

C'est pourquoi on doit aussi ajouter

```html
<span class="sr-only">Libellé</span>
```

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
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

### Nom accessible

Selon le [critère 6.1 du RGAA](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6), catégorie **Notes techniques**, lorsque l’intitulé visible est complété par une autre expression dans le nom accessible :

- WCAG insiste sur le placement de l’intitulé visible au début du nom accessible sans toutefois réserver l’exclusivité de cet emplacement ;
- WCAG considère comme un cas d’échec une correspondance non exacte de la chaîne de caractères de l’intitulé visible au sein du nom accessible.

Par exemple, si l’on considère l’intitulé visible « Commander maintenant » complété dans le nom accessible par l’expression « produit X », on peut avoir les différents cas suivants :

- « Commander maintenant produit X » est valide (bonne pratique) ;
- « Produit X : commander maintenant » est valide ;
- « Commander produit X maintenant » est **non valide**.

C'est pourquoi il est déconseillé de mettre les libellés suivants :

- Ajouter Chat mignon dans le panier
- Supprimer Chat mignon du panier

Le nom accessible est crucial pour les commandes vocales. Des personnes à mobilité réduite, qui ne peuvent pas naviguer avec le clavier, peuvent utiliser par exemple les logiciels comme `Voice Control` avec Apple ou `Nuance Dragon` sur Windows pour naviguer **avec leurs voix**.

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
