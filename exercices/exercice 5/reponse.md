# Réponses à l'exercice 5 : La langue

Vous avez pu constater qu'avec le lecteur d'écran, la voix vocalisait le texte avec un accent bizarre et était totalement incompréhensible.

Lorsqu'on créé un nouveau projet avec Angular, React, VueJS ou autre framework, la langue par défaut sur le projet est en anglais.

C'est pourquoi il est important de ne pas oublier de modifier l'attribut `lang` sur la balise `<html>`. Ce qui donnerait `<html lang="fr"></html>`

Cependant, lorsqu'un mot ou un paraphrase est en anglais, mettre `<span lang="en">Stickers</span>` pour que le lecteur d'écran vocalise le mot "stickers" dans la bonne langue.

## Astuce

Il est aussi facile de détecter si le site n'est pas dans la bonne langue quand le navigateur propose de traduire le contenu du site alors qu'il est déjà en français.
