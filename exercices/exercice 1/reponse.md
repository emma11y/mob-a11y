# Réponse à l'exercice 1

## Solution

Le titre **“Des autocollants qui vous collent à la peau.”** doit être un `<h2>`.

Pourquoi ?  
Parce qu’il existe déjà un titre principal `<h1>` sur la page : **STICKR**.  
Ce sous-titre vient donc logiquement au niveau inférieur.

## Ce que vérifiaient les tests

Les tests validaient plusieurs choses :

- Le texte est bien exposé comme un **heading** (via son rôle)
- Il est **visible**
- La page respecte :
  - la présence d’un `<h1>`
  - une **hiérarchie cohérente des titres** (pas de saut de niveau)

Si vous aviez mis un `<h3>` ou un `<div>`, le test (et Axe) aurait échoué.

## Pourquoi c’est important

Les titres ne servent pas qu’au design : ils structurent l’information.

Pour une personne utilisant un lecteur d’écran :

- la page peut être parcourue **par titres uniquement**
- cela permet de comprendre rapidement :
  - le sujet de la page
  - son organisation
  - où se trouve l’information recherchée

Sans hiérarchie correcte, la navigation devient confuse, voire inutilisable.

## Bonnes pratiques

- Respecter l’ordre logique :  
  `h1 → h2 → h3 → ...`
- Éviter les sauts de niveau (`h1 → h3`)
- Utiliser les headings pour **structurer**, pas pour styliser
- Il doit y avoir **au moins un `<h1>`** sur la page

Pensez “table des matières” plutôt que “taille de texte”.

## Tester avec un lecteur d’écran

Avec NVDA ou VoiceOver :

- `H` → titre suivant
- `Maj + H` → titre précédent

Vous devriez pouvoir comprendre la page sans lire tout le contenu.

## Toolbox

Outils intéressants à ajouter dans votre toolbox de dev accessibilité :

**Extensions de navigateur web :**

- [HeadingsMap](https://www.accessibility-developer-guide.com/setup/helper-tools/browser-extensions/headingsmap/)

**Bookmarklets :**

Un bookmarklet est un lien contenant du JavaScript.
Lorsqu'un lien de type bookmarklet est activé, le navigateur exécute le code JavaScript qu'il contient.
Mettez les en favori dans votre navigateur préféré :

- [Headings booktmarklet](https://accessibility-bookmarklets.org/install.html)

Ces outils permettent de visualiser instantanément la hiérarchie des titres.
