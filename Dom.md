# 🧪 Exercice - Tester la création dynamique d'éléments DOM

## 🎯 Objectif

Apprendre à **tester du code JavaScript qui manipule dynamiquement le DOM** en utilisant **Jest** et **Testing Library**.

Vous devez :

- Comprendre le fonctionnement de trois boutons dynamiques,
- Écrire des tests unitaires robustes pour chacun de ces comportements,
- Utiliser correctement `@testing-library/dom`, `fireEvent` et les matchers fournis par `@testing-library/jest-dom`.

---

## 📂 Fichiers fournis

- `dom.js` : contient trois fonctions :
  - `createButton()`
  - `createSendButton()`
  - `createAddItemButton()`

---

## 🛠 Prérequis techniques

Installer les dépendances de test si ce n'est pas déjà fait :

```bash
npm install --save-dev jest @testing-library/dom @testing-library/jest-dom
```

Configuration minimale de Jest dans votre fichier `jest.config.js` ou `jest.config.ts` :

```javascript
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
```

Et créer un fichier `jest.setup.js` avec :

```javascript
import "@testing-library/jest-dom";
```

---

## 📋 Consignes

Vous devez créer un fichier de test pour valider les comportements suivants :

### 1. Tests pour `createButton`

- Vérifier que le bouton **apparaît dans le DOM** avec le texte **« Clique ici »**.
- Vérifier que le bouton **n'est pas désactivé au départ**.
- Après un clic sur le bouton :
  - Le bouton devient **désactivé**.
  - Un message est affiché dans la console (`console.log`).

### 2. Tests pour `createSendButton`

- Vérifier que le bouton affiche le texte **« Envoyer »** au départ.
- Après un clic sur le bouton, le texte devient **« Envoyé ✅ »**.

### 3. Tests pour `createAddItemButton`

- Vérifier qu'**aucun nouvel élément** n'existe au départ.
- Après un clic sur le bouton **« Ajouter un élément »**, un nouvel élément texte **« Nouvel élément ajouté »** est ajouté dans la page.

---

## ✨ Conseils pour vos tests

- Utilisez `beforeEach` pour nettoyer le DOM avant chaque test :
  ```javascript
  beforeEach(() => {
    document.body.innerHTML = "";
  });
  ```
- Utilisez :
  - `getByText`
  - `queryByText`
  - `fireEvent`
- Utilisez les assertions fournies par `@testing-library/jest-dom` :
  - `toBeInTheDocument()`
  - `toHaveTextContent()`
  - `toBeDisabled()`
  - `toHaveAttribute()`
- Utilisez `jest.spyOn(console, 'log')` pour vérifier les appels de console.

---

## 📦 Exemple d'organisation des tests

Votre fichier de tests pourrait être organisé ainsi :

```javascript
describe('Dynamic Button Test', () => { ... });
describe('Send Button Test', () => { ... });
describe('Add Item Button Test', () => { ... });
```

Chaque `describe` regroupe les tests d'un comportement spécifique.

---

# 🚀 Résultat attendu

À la fin, vos tests doivent vérifier **tous les comportements** de chaque bouton.  
Le code doit être **propre**, **structuré**, et **tous les tests doivent passer**.

---

# 🎯 Bonus facultatif

- Essayez de tester **ce qu’il se passe en cas de double-clic**.
- Vérifiez si les classes CSS ou attributs du bouton changent (si applicable).

---

# 🏁 Bonne chance et amusez-vous en testant !
