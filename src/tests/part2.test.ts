import { Character } from "../part2";

describe("Character classes", () => {
  it("Mage should deal 1.5x damage", () => {
    const mage = new Character("Mage", 100, 20, "Mage");
    const enemy = new Character("Orc", 100, 10, "Guerrier");

    mage.attack(enemy);

    expect(enemy.hp).toBe(100 - 30); // 20 * 1.5
  });

  it("Archer should deal +5 extra damage", () => {
    const archer = new Character("Archer", 100, 20, "Archer");
    const enemy = new Character("Orc", 100, 10, "Guerrier");

    archer.attack(enemy);

    expect(enemy.hp).toBe(100 - 25); // 20 + 5
  });
});

//  test potion

it("should heal correctly", () => {
  const hero = new Character("Hero", 50, 20, "Guerrier");

  hero.heal(30);

  expect(hero.hp).toBe(80);
});
