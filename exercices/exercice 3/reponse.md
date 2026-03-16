# Réponses à l'exercice 3 : navigation au clavier

## Première solution

Désactiver `outline:none` qui empêche de rendre les liens et boutons visibles à la navigation au clavier

## Deuxième solution

Comme l'`outline:none` rend souvent les liens et boutons "moches", il existe un petit hack CSS.

Quand on style les liens et boutons avec la pseudo-classe `:hover`, on les voit souligné quand on y passe avec la souris.
Mais pour les voir avec la navigation au clavier, on va utiliser la pseudo-classe `:focus-visible`.

Sur chaque lien (`a`) ou bouton (`button`) ayant `:hover`, mettre `:focus-visible`.

### Good To know

Il existe plusieurs pseudo-classes CSS :

- `:focus` : sert à appliquer le style sur l'élément qui reçoit le focus que ce soit par le clavier ou par la souris.
- `:focus-visible`: permet d'appliquer le style de focus uniquement lorsque le focus est obtenu à l'aide du clavier, et non de la souris.
- `:focus-within`: s'applique à un élément lorsque celui-ci ou l'un de ses descendants reçoit le focus.
