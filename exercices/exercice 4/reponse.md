# Réponse à l'exercice 4 : Boutons et liens

## Solution

Utiliser les bons éléments HTML en fonction de l’intention :

- `<button>` pour déclencher une action (ouvrir, fermer, ajouter, supprimer…)
- `<a>` pour naviguer vers une autre page ou une autre ressource

Remplacer tous les éléments inappropriés (`<div>`, `<span>`, etc.) par les éléments sémantiques correspondants.

Supprimer également les usages détournés comme :

```html
<div role="button"></div>
```

## Ce que vérifiaient les tests

Les tests vérifiaient que :

- les actions (ouvrir le panier, ajouter, supprimer, fermer) sont faites avec des `<button>`
- le lien de paiement est bien un `<a>`
- aucun `<div>` n’utilise `role="button"`

Ils s’appuient sur le nom de balise HTML (`>tagName>`) pour garantir l’usage des bons éléments.

## Pourquoi c’est important

Les éléments HTML natifs embarquent déjà des comportements essentiels :

- accessibilité clavier (**Tab**, **Entrée**, **Espace**)
- rôle sémantique exposé aux technologies d’assistance
- comportements par défaut cohérents

Un `<div>` ou un `<span>` :

- n’est pas focusable par défaut
- n’est pas annoncé correctement par un lecteur d’écran
- nécessite de recréer tous les comportements (souvent mal faits ou incomplets)

## Bonnes pratiques

- Utiliser `<button>` pour toute action utilisateur·ice
- Utiliser `<a>` uniquement pour la navigation
- Ne pas détourner les éléments HTML de leur usage
- Ne pas utiliser `role=""` pour compenser un mauvais choix d’élément
- S’appuyer sur les comportements natifs plutôt que de les recréer

### À noter

Un bouton peut être stylé pour ressembler à un lien, et inversement.

Mais le choix de l’élément doit toujours être guidé par la fonction, pas par l’apparence.
