export class Character {
    name;
    hp;
    attackPower;
    characterClass;
    constructor(name, hp, attackPower, characterClass) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
        this.characterClass = characterClass;
    }
    attack(enemy) {
        let damage = this.attackPower;
        // Capacité spéciale
        if (this.characterClass === "Mage") {
            damage *= 1.5; // Mage inflige 50% de dégâts en plus
        }
        else if (this.characterClass === "Archer") {
            damage += 5; // Archer ajoute 5 points de dégâts
        }
        enemy.hp -= damage;
    }
    isAlive() {
        return this.hp > 0;
    }
    //    ajouter potion
    heal(amount) {
        this.hp += amount;
    }
}
