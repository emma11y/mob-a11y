# Exercice 4 : Bouton ou lien ?

Avant de procéder à la navigation au clavier et à l'usage du lecteur d'écran, nous devons nous assurer que les boutons et les liens respectent la sémantique HTML.

Or sur cette page, certains éléments interactifs ne sont pas correctement définis.

Ils ressemblent à des boutons ou à des liens, mais ne se comportent pas comme tels :

- ils ne sont pas toujours accessibles au clavier
- leur rôle n’est pas correctement interprété par les technologies d’assistance

Un `<div>` n’est pas un élément interactif, ça n'est ni un bouton ni un lien.

## Votre mission

A vous de leur attribuer le bon attribut `<button>` ou `<a>`.

Identifier les éléments interactifs et leur attribuer le bon élément HTML :

- `<button>` pour déclencher une action
- `<a>` pour naviguer vers une autre page

## Avant de coder

- Naviguez au clavier avec la touche **TAB**
- Essayez d’activer les éléments avec **Entrée**
- Observez ce qui ne fonctionne pas

### Raccourcis

Avec les lecteurs d'écran NVDA, VoiceOver ou Orca, on peut naviguer de boutons en boutons et de liens en liens grâce aux raccourcis :

#### Boutons

| Outil       | Zone suivante             | Zone précédente |
| ----------- | ------------------------- | --------------- |
| NVDA / Orca | `B`                       | `Shift + B`     |
| VoiceOver   | `Ctrl + Option + Cmd + L` |                 |

#### Liens

- Pour passer d'un lien au suivant, appuyer sur la touche `K` comme _link_
- Pour revenir au lien précédent : appuyer sur les touches `Shift + K`.

| Outil       | Zone suivante             | Zone précédente |
| ----------- | ------------------------- | --------------- |
| NVDA / Orca | `K`                       | `Shift + K`     |
| VoiceOver   | `Ctrl + Option + Cmd + L` |                 |

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice4`

[Voir le test](../../tests/exercice4.spec.ts)
