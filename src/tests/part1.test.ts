import { Character } from "../part1";

describe("Character", () => {
  it("should reduce enemy HP when attacking", () => {
    const hero = new Character("Hero", 100, 20);
    const monster = new Character("Monster", 80, 15);

    hero.attack(monster);

    expect(monster.hp).toBe(60); // 80 - 20
  });

  it("should detect if character is alive", () => {
    const hero = new Character("Hero", 100, 20);

    expect(hero.isAlive()).toBe(true);
    hero.hp = 0;
    expect(hero.isAlive()).toBe(false);
  });
  it.todo("should allow character to use healing potion");
  it.todo("should trigger critical hit sometimes");
  it.todo("should allow character to defend");
});
