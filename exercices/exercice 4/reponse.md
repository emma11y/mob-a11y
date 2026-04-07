# Réponses à l'exercice 4 : Les boutons et liens

- Un bouton **fait** quelque chose.
- Un lien **va** quelque part.

Un bouton n'est pas un lien, et vice-versa un lien n'est pas un bouton.

Un `<div>` ou un `<span>` n'est ni un bouton ni un lien. Ils ne reçoivent pas naturellement le focus et ne sont donc pas utilisables au clavier avec les touches **Tab** et **Entrée**, tandis que les `<button>` et `<a>` le reçoivent naturellement.

N'utilisez pas non plus d'attribut `role` pour forcer un rendu navigateur.

```html
<div role="button"></div>
```
