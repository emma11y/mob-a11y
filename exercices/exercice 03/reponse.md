# Réponse à l'exercice 3 : Navigation au clavier

## Solution 1

Supprimer `outline: none` qui empêche de visualiser le focus sur les éléments interactifs.

Par défaut, les navigateurs affichent un contour (outline) lorsqu’un élément reçoit le focus. Le retirer sans alternative rend la navigation au clavier très difficile, voire impossible.

## Solution 2

Si le style par défaut du focus ne convient pas visuellement, il est préférable de le personnaliser plutôt que de le supprimer.

On peut utiliser la pseudo-classe `:focus-visible` pour afficher un style de focus uniquement lors de la navigation au clavier.

Par exemple, si un élément possède un style au `:hover`, il est recommandé d’ajouter un équivalent pour le focus :

```css
a:hover,
a:focus-visible {
  text-decoration: underline;
}
```

Cela permet d’assurer une cohérence entre navigation souris et clavier.

## Ce que vérifiaient les tests

Les tests vérifiaient que :

- les éléments interactifs sont accessibles au clavier
- le focus est visible lors de la navigation avec la touche **Tab**

Sans focus visible, il devient impossible de savoir où l’on se trouve dans la page.

## Bonnes pratiques

- Ne jamais supprimer le focus sans proposer une alternative visible
- Utiliser `:focus-visible` pour adapter l’affichage au clavier
- S’assurer que tous les éléments interactifs sont atteignables avec **Tab**
- Vérifier l’ordre de tabulation

## Good to know

Il existe plusieurs pseudo-classes CSS liées au focus :

- `:focus` : s’applique lorsque l’élément reçoit le focus (souris ou clavier)
- `:focus-visible` : s’applique uniquement lors d’une navigation au clavier
- `:focus-within` : s’applique à un élément lorsqu’un de ses descendants a le focus

## Toolbox

**Lecteur d'écran**

Avec les lecteurs d'écran NVDA et VoiceOver, on peut naviguer d'élément en élément avec les touches **Tab**.

**Tests automatisés :**

- [Playwright](https://playwright.dev/)

Utiliser `press('Tab')`. Exemple :

```ts
await page.getByRole('link', { name: 'Accueil' }).first().press('Tab');
await page.getByRole('link', { name: 'Qui sommes nous' }).press('Tab');
```
