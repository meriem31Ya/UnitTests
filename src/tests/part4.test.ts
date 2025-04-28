import { Character } from "../part4";

it("should reduce damage when defending", () => {
  const hero = new Character("Hero", 100, 20, "Guerrier");
  const enemy = new Character("Orc", 100, 10, "Guerrier");

  hero.defend();
  enemy.attack(hero);

  expect(hero.hp).toBeGreaterThan(90); // Moins de dégâts
});
