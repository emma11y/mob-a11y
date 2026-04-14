# Mob & Accessibilité

## Pré-requis

Avant de commencer l’atelier, il faut préparer votre environnement.

### 1. Cloner le projet

Récupérez le dépôt du workshop :

`git clone https://github.com/emma11y/mob-a11y`

Puis suivez les instructions du fichier README.md.

### 2. Installer les dépendances

Dans le dossier du projet :

`npm install`

### 3. Installer un lecteur d’écran

Cet atelier repose sur l’usage d’un lecteur d’écran. Installez-en un selon votre système :

- Windows : [NVDA](https://www.nvda.fr/)
- MacOS : VoiceOver (déjà intégré)
- Linux : [Orca](https://orca.gnome.org/)

Les raccourcis utiles sont disponibles dans la page [ressources](https://emma11y.github.io/mob-a11y/ressources).

### 4. Prévoir des écouteurs

Le lecteur d’écran vocalise en continu. Pour le confort de tout le monde, merci d’utiliser des écouteurs.

Si vous êtes une personne sourde ou malentendante, vous pouvez utiliser la visionneuse de paroles (Outils > Visionneuse de paroles) sur NVDA et le sous-titrage en direct (intégré) avec VoiceOver.

### 5. Vérifier que tout fonctionne

Avant l’atelier, assurez-vous que :

- le projet se lance correctement
  `npm run dev`

- les tests Playwright peuvent être exécutés
  `npm run tests`

- le lecteur d’écran est fonctionnel
  Si vous avez un doute, pas d’inquiétude : nous prendrons quelques minutes en début d’atelier pour vérifier ensemble.

## Cadre de l’atelier

L’atelier est conçu pour être réalisé en **mob programming** (groupes de 3 à 4 personnes) ou en **pair programming** (binômes).

Il est tout à fait possible de faire les exercices en solo, mais nous vous recommandons de vous regrouper pour :

partager vos connaissances
confronter vos points de vue
découvrir des compétences que vous ne pensiez pas avoir
Nous serons présentes pour faciliter, répondre à vos questions et vous accompagner.

### Déroulé

Les exercices suivent une timebox.

À la fin de chaque timebox :

- nous vérifierons la Definition of Done
- nous corrigerons ensemble
- nous rejouerons les tests
- nous testerons avec un lecteur d’écran en live
- Nous serons présentes pour faciliter, répondre à vos questions et vous accompagner.

### Definition of Done

Chaque étape du site doit remplir les critères suivants pour être valide :

- Être navigable au clavier
- Être lisible par un lecteur d'écran
- Ne faire remonter aucune erreur dans Axe / Playwright

### Déroulé de des exercices

Vous avez le dossier `tests` qui vous permet de lancer les tests Playwright.

Chaque test correspond à un exercice.

Sur chaque exercice, vous devez résoudre les tests pour qu'il passe au vert avant de passer à l'exercice suivant.

Des exercices bonus sont disponibles pour les groupes les plus rapides.

**Des questions ? Levez la main !**
