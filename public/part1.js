export class Character {
    name;
    hp;
    attackPower;
    constructor(name, hp, attackPower) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
    }
    attack(enemy) {
        console.log(`${this.name} attaque ${enemy.name}`);
        enemy.hp -= this.attackPower;
        console.log(`${enemy.name} a maintenant ${enemy.hp} HP`);
    }
    isAlive() {
        return this.hp > 0;
    }
}
// Exemple d'utilisation
const hero = new Character("Héros", 100, 20);
const monster = new Character("Monstre", 80, 15);
while (hero.isAlive() && monster.isAlive()) {
    hero.attack(monster);
    if (!monster.isAlive()) {
        console.log(`${monster.name} est vaincu !`);
        break;
    }
    monster.attack(hero);
    if (!hero.isAlive()) {
        console.log(`${hero.name} est vaincu !`);
        break;
    }
}
