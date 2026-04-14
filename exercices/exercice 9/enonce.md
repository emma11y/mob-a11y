# Exercice 9 : Formulaire

Avec le lecteur d'écran, essayez de remplir le formulaire de paiement, et vérifiez que les libellés et les erreurs des champs du formulaire soient correctement vocalisés.

- Est-ce que chaque champ est bien associé à son libellé ?
- Est-ce que chaque erreur est correctement restituée et associée au champ ?

En l'état, il est difficile de comprendre quoi corriger pour valider le formulaire.

## Votre mission

Rendre le formulaire compréhensible et utilisable avec un lecteur d’écran.

### À vérifier

- Est-ce que la liste déroulante est accessible au clavier ? Et ses options restituées par le lecteur d'écran ?
- Chaque champ est-il associé à un libellé ?
- Chaque erreur est-elle liée au bon champ ?
- Les messages sont-ils annoncés au bon moment ?

### Indice

Pour les messages d'erreur, regardez le fichier : [../../src/pages/checkout/checkout.ts](../../src/pages/checkout/checkout.ts)

Fonctions à explorer :

- `showError`
- `checkRequiredError`

## Avant de coder

- Naviguez dans le formulaire avec un lecteur d’écran
- Soumettez-le sans le remplir
- Écoutez comment les erreurs sont annoncées

## Corriger le test avec Playwright

Lancer la commande `npx playwright test exercice9`

[Voir le test](../../tests/exercice9.spec.ts)
