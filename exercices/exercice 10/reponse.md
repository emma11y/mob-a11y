# Réponses à l'exercice 10 : Les notifications

## Solution

Pour rendre les notifications accessibles, on doit ajouter trois attributs ARIA.

L'attribut `role` va définir que le div est une alerte.

L'attribut `aria-live` décrit le type de mise à jour.

Certaines personnes utilisant les technologies d'assistance ne peuvent pas « voir » les mises à jour dynamiques, l'attribut `aria-live` sert à définir quelles informations mises à jour doivent être :

- Signalées immédiatement,
- Annoncées si l'occasion se présente,
- Annoncées de façon proactive mais lues lorsque l'utilisateur·ice choisit de se concentrer sur la zone mise à jour.

L'attribut `aria-relevant` sert à décrire quels types de changements ont eu lieu dans une région aria-live, et lesquels sont pertinents et doivent être annoncés.

```html
<div
  role="alert"
  class="alert"
  aria-live="polite"
  aria-relevant="additions text"
></div>
```

Pour en savoir plus sur ces attributs et ses valeurs sur MDN :

- [aria-live](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [aria-relevant](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

## Ce que vérifiait le test

Le test vérifiait que le composant alert avait bien ces attributs ARIA et le message associé.

## Bonne pratique

Il est essentiel de restituer vocalement le message d'alerte afin d'informer la personne que l'action qu'elle a effectué a été correctement effectuée.
