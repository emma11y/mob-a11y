# Réponses à l'exercice 5 : La langue

Vous avez pu constater qu'avec le lecteur d'écran, la voix vocalisait le texte avec un accent bizarre et était totalement incompréhensible.

Lorsqu'on créé un nouveau projet avec Angular, React, VueJS ou autre framework, la langue par défaut sur le projet est en anglais.

## Solution

Définir correctement la langue principale du document sur la balise `<html>` :

```html
<html lang="fr"></html>
```

Et préciser la langue des contenus ponctuels lorsqu’ils diffèrent de celle de la page :

<span lang="en">Stickers</span>

## Ce que vérifiaient les tests

Les tests vérifiaient que :

- la langue principale de la page est bien définie avec lang="fr" sur <html>
- le mot "Stickers" est correctement balisé avec `lang="en"`

Ils s’assurent que les technologies d’assistance peuvent interpréter correctement la langue du contenu.

## Pourquoi c’est important

Les lecteurs d’écran s’appuient sur l’attribut lang pour adapter :

- la prononciation
- l’accent
- les règles de lecture

Sans cela, le contenu peut devenir difficile, voire incompréhensible.

Cela impacte aussi :

- les outils de traduction automatique
- certains moteurs de recherche

## Bonnes pratiques

- Toujours définir la langue principale sur `<html>`
- Utiliser les codes de langue standard (`fr`, `en`, `es`, etc.)
- Déclarer les changements de langue ponctuels dans le contenu
- Être précis : un mot étranger peut suffire à nécessiter un attribut `lang`

## Astuce

Il est aussi facile de détecter si le site n'est pas dans la bonne langue quand le navigateur propose de traduire le contenu du site alors qu'il est déjà en français.
