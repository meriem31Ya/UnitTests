import "@testing-library/jest-dom";

import { createAddItemButton, createButton, createSendButton } from "../dom";
import { fireEvent, getByText, queryByText } from "@testing-library/dom";

describe("Dynamic Button Test", () => {
  beforeEach(() => {
    // Vide le body avant chaque test
    document.body.innerHTML = "";
    createButton();
  });

  test("le bouton est ajouté au DOM", () => {
    const button = getByText(document.body, "Clique ici");
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  test("le bouton se désactive après clic", () => {
    const button = getByText(document.body, "Clique ici");

    fireEvent.click(button);

    expect(button).toBeDisabled();
  });

  test("un message est affiché dans la console après clic", () => {
    const button = getByText(document.body, "Clique ici");
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith("Bouton cliqué et désactivé");

    consoleSpy.mockRestore();
  });
});

//  test 2

describe("Send Button Test", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    createSendButton();
  });

  test('le bouton affiche "Envoyer" au départ', () => {
    const button = getByText(document.body, "Envoyer");
    expect(button).toBeInTheDocument();
  });

  test("le texte du bouton change après clic", () => {
    const button = getByText(document.body, "Envoyer");

    fireEvent.click(button);

    const updatedButton = getByText(document.body, "Envoyé ✅");
    expect(updatedButton).toBeInTheDocument();
  });
});
//  test 3

describe("Add Item Button Test", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    createAddItemButton();
  });

  test("aucun élément n’est présent au départ", () => {
    const item = queryByText(document.body, "Nouvel élément ajouté");
    expect(item).toBeNull();
  });

  test("un nouvel élément est ajouté après clic", () => {
    const button = getByText(document.body, "Ajouter un élément");

    fireEvent.click(button);

    const newItem = getByText(document.body, "Nouvel élément ajouté");
    expect(newItem).toBeInTheDocument();
  });
});
