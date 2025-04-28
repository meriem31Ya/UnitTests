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
    // attack modifié pour inclure les coups critiques
    attack(enemy) {
        let damage = this.attackPower;
        if (this.characterClass === "Mage") {
            damage *= 1.5;
        }
        else if (this.characterClass === "Archer") {
            damage += 5;
        }
        // Coup critique (20% de chance)
        if (Math.random() < 0.2) {
            console.log("Coup critique !");
            damage *= 2;
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
