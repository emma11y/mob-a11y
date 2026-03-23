# Réponses à l'exercice 6

## Ajouter un libellé

Un bouton ou un lien ne doit pas seulement avoir une icône. Les icônes ne sont pas correctement restitués au lecteur d'écran, c'est pourquoi lorsqu'on a un `<svg>` ou `<i>`, on met l'attribut `aria-hidden="true"` pour que cet élément ne soit pas vocalisable au lecteur d'écran.

C'est pourquoi on doit aussi ajouter `<span class="sr-only>Libellé</span>`.

Il est possible d'ajouter l'attribut `title` ou `aria-label` sur le bouton ou lien mais ces deux attributs peuvent poser des soucis d'accessibilité. Je vous invite à lire l'article [Title, ce faux ami de l’accessibilité](https://www.24joursdeweb.fr/2025/title-ce-faux-ami-de-l-accessibilite) rédigé par François-Xavier Lair sur 24 jours de web.

On aborde l'attribut ARIA dans l'exercice suivant. L'attribut `aria-hidden="true"` permet de ne pas restituer vocalement l'élément.

## Définir un libellé explicite

Chaque bouton ou lien ayant un image doit avoir un libellé explicite.

Si tous les boutons ont le même libellé, comment savoir quel produit ajouter dans le panier ? Quel produit supprimer ?

C'est pourquoi il est important de savoir les différencier.
