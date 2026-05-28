# Réponses à l'exercice 10 : Les notifications

## Solution

Pour rendre les notifications accessibles, on doit ajouter un attribut ARIA.

L'attribut `role` va définir que le div est une alerte.

```html
<div role="alert" class="alert"></div>
```

En définissant le role que ce soit `alert` ou `status`, le lecteur d'écran va vocaliser l'alerte.

Pour en savoir plus sur le role `alert` sur [MDN](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role).

## Ce que vérifiait le test

Le test vérifiait que le composant alert avait bien ces attributs ARIA et le message associé.

## Bonne pratique

Il est essentiel de restituer vocalement le message d'alerte afin d'informer la personne que l'action qu'elle a effectué a été correctement effectuée.
