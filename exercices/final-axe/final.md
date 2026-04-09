# Axe

Une fois que vous avez fini les exercices, lancez le test final `final-axe` qui permet de vérifier si les tests d'accessibilité définis par Axe passent.

A noter que les tests Axe couvrent qu'entre 30% et 40% des critères d'accessibilité.

En effet, les outils automatiques ne peuvent pas évaluer :

- la pertinence d'une alternative textuelle (une image peut avoir un attribut alt mais inadéquat) ;
- la navigation au clavier dans des contextes complexes ;
- la restitution par les lecteurs d'écran (NVDA, JAWS, VoiceOver) ;
- la compréhensibilité réelle du contenu ;
- l'ordre de lecture logique ;
- la gestion du focus dans les interactions riches.

Le RGAA lui-même l'impose : certains critères exigent des **« tests de restitution à effectuer sur des technologies d'assistance »**. C'est obligatoirement le travail d'un expert humain.

Source : [Accessibilité numérique : le contrôle automatisé change la donne](https://www.urbilog.com/blog-des-experts/accessibilite-numerique-le-controle-automatise-change-la-donne) - Urbilog

C'est pourquoi il est nécessaire de faire des tests utilisateurs avec le lecteur d'écran et le clavier pour s'assurer que c'est conforme.

Certains tests que nous avons créés sont sur mesure et non gérés par l'outil Axe. Ecrire ces tests nous a pris du temps.

## Playwright

Lancer la commande `npx playwright test final-axe`

[Voir le test](../../tests/final-axe.spec.ts)
