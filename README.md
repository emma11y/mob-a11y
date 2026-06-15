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

#### Installer Playwright

Ensuite, lancer les commandes suivantes sur le terminal :

`npm install -D @playwright/test@latest`
`npx playwright install --with-deps`

Pour lancer les tests avec Playwright dans VS Code, vous pouvez aussi installer l'extension Playwright Test for VSCode (Nouvelle fenêtre)

### 3. Installer un lecteur d’écran

Cet atelier repose sur l’usage d’un lecteur d’écran. Installez-en un selon votre système :

- Windows : [NVDA](https://www.nvda.fr/)
- MacOS : VoiceOver (déjà intégré)
- Linux : [Orca](https://orca.gnome.org/)

Pour démarrer le lecteur d'écran :

- NVDA : `Ctrl+Alt+N`
- VoiceOver : `Command + F5`
- Orca : `Super + alt + S`

Pour quitter le lecteur d'écran

- NVDA : `Ins + Q`
- VoiceOver : `Command + F5`
- Orca : `Super + alt + S`

Les raccourcis utiles sont disponibles dans la page [ressources](https://emma11y.github.io/mob-a11y/ressources).

#### Comment utiliser NVDA ?

Pour paramétrer la voix : allez dans `Préférences > Parole`. Vous pouvez choisir la voix, le débit de parole et le volume. Faites appliquer pour que les changements se fassent.

Pour afficher la visionneuse de paroles (le sous-titrage) : allez dans `Outils > Visionneuse de paroles`.

Les raccourcis complètes sont disponibles sur Deque : [Quick Reference Guide: NVDA for Windows Keyboard Commands](https://media.dequeuniversity.com/en/docs/screen-readers-and-input-methods/nvda-guide.pdf) (EN - PDF)

#### Comment utiliser VoiceOver ?

Pour paramétrer la voix : allez dans `Paramètres > Accessibilité > VoiceOver > Ouvrir l'utilitaire VoiceOver > Parole`. Vous pouvez choisir la voix, le débit de parole et le volume.

Les raccourcis complètes sont disponibles sur Deque : [Quick Reference Guide: VoiceOver for iOS](https://media.dequeuniversity.com/en/docs/screen-readers-and-input-methods/voiceover-ios-guide.pdf) (EN - PDF)

#### Comment utiliser Orca ?

Vous trouvez des instructionns sur comment lancer [Orca](https://www.a11yproject.com/posts/getting-started-with-orca/) (EN)

Vous avez également le tutoriel : [Orca screen reader tutorial](https://diff.wikimedia.org/2020/07/02/an-orca-screen-reader-tutorial/) (EN)

Paramètrage Orca :

- `CapsLock + espace`
- `Terminal : orca -s`

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

- partager vos connaissances
- confronter vos points de vue
- découvrir des compétences que vous ne pensiez pas avoir

Échangez-vous le clavier régulièrement : la personne au clavier ne fait que ce qu'on lui dit et ne prend pas de décision, afin d'assurer la participation de tout le groupe. Si ce n'est pas possible, demandez les idées du groupe avant de donner les vôtres.

Nous serons présentes pour faciliter, répondre à vos questions et vous accompagner.

### Déroulé de l'atelier

Les exercices suivent une **timebox** indicative mais non bloquante.

Des exercices bonus (10 et 11) sont disponibles pour les groupes les plus rapides.

Ce n'est pas grave si vous n'arrivez pas à tout faire, l'important c'est d'apprendre des choses à votre rythme.

À la fin de chaque timebox, si vous en avez besoin :

- nous vérifierons la Definition of Done
- nous corrigerons ensemble le code
- nous rejouerons les tests
- nous testerons avec un lecteur d’écran en live

**Des questions ? Levez la main !**

### Definition of Done

Chaque étape du site doit remplir les critères suivants pour être valide :

- Être navigable au clavier
- Être lisible par un lecteur d'écran
- Ne faire remonter aucune erreur dans Axe / Playwright

### Comment faire les exercices ?

Vous avez le dossier `tests` qui vous permet de lancer les tests Playwright.

A chaque exercice, correspond un fichier de tests que nous avons préparé pour vous.

Pour chaque exercice, vous devez résoudre les tests pour qu'ils passent au vert, avant de passer à l'exercice suivant.

- [Exercice 01 : Pour commencer doucement : Titres](exercices/exercice%2001/enonce.md)
- [Exercice 02 : Contrastes](exercices/exercice%2002/enonce.md)
- [Exercice 03 : Bouton ou lien ?](exercices/exercice%2003/enonce.md)
- [Exercice 04 : Navigation au clavier](exercices/exercice%2004/enonce.md)
- [Exercice 05 : La langue](exercices/exercice%2005/enonce.md)
- [Exercice 06 : Les boutons et leurs labels sont-ils explicites ?](exercices/exercice%2006/enonce.md)
- [Exercice 07 : Images](exercices/exercice%2007/enonce.md)
- [Exercice 08 : La page doit être structurée grâce aux régions](exercices/exercice%2008/enonce.md)
- [Exercice 09 : Formulaire](exercices/exercice%2009/enonce.md)
- [Exercice 10 : Listes](exercices/exercice%2010/enonce.md)

En bonus :

- [Exercice 11 : Notifications (ou messages d'alertes)](exercices/exercice%2011/enonce.md)
- [Exercice 12 : Conditions RGPD](exercices/exercice%2012/enonce.md)

Pour conclure : [le boss final](exercices/final-axe/final.md).
