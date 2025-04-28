import { Character } from "../part3";

it("should deal critical hit damage when random < 0.2", () => {
  const hero = new Character("Hero", 100, 20, "Guerrier");
  const enemy = new Character("Orc", 100, 10, "Guerrier");

  jest.spyOn(Math, "random").mockReturnValue(0.1); // Forcer coup critique

  hero.attack(enemy);

  expect(enemy.hp).toBe(100 - 20 * 2); // dégâts doublés
});
