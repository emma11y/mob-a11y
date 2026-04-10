# Axe

Vous avez terminé les exercices. Bravo !

Il est maintenant temps de lancer le test final : `final-axe`.

Ce test exécute une suite de règles automatisées d’accessibilité via Axe pour vérifier si les problèmes identifiés ont été corrigés.

## Ce qu'il couvre (et ses limites)

Les outils d’analyse automatique comme Axe sont très utiles pour détecter rapidement des erreurs courantes.

Mais ils ne couvrent qu’environ 30 à 40 % des critères d’accessibilité.

Cela signifie qu’une application peut passer tous les tests automatisés… tout en restant difficile voire impossible à utiliser.

## Ce que les outils automatiques ne peuvent pas vérifier

Les tests automatisés ne peuvent pas évaluer :

- la pertinence réelle d’un texte alternatif sur une image
- la navigation au clavier dans des interfaces complexes
- la restitution par les lecteurs d’écran (NVDA, JAWS, VoiceOver)
- la compréhension globale du contenu
- l’ordre de lecture logique dans des mises en page riches
- la gestion du focus dans les interactions avancées (modales, menus, dialogs)

## Ce que dit le RGAA

Le RGAA impose explicitement que certains critères nécessitent des tests réalisés avec des technologies d’assistance.

Ces vérifications ne peuvent pas être automatisées.

Elles reposent sur des tests utilisateurs et des experts en accessibilité.

## Pourquoi c’est important

Une interface peut être techniquement valide… sans être réellement utilisable.

C’est pour cela que les tests automatisés ne sont qu’une première étape.

## À propos de ce projet

Certains tests que vous avez rencontrés ont été conçus spécifiquement pour cet atelier.

Ils ne proviennent pas tous de règles standardisées d’outils comme Axe.

Les écrire a demandé du temps, car ils simulent des situations réelles d’usage.

## Source

https://www.urbilog.com/blog-des-experts/accessibilite-numerique-le-controle-automatise-change-la-donne

## Playwright

Lancer la commande `npx playwright test final-axe`

[Voir le test](../../tests/final-axe.spec.ts)
