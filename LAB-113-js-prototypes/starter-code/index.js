// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`
        else return `${this.name} has died in act of combat`
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        const randomViking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))]
        const randomSaxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))]
        const randomAttack = randomSaxon.receiveDamage(randomViking.attack())
        if (randomSaxon.health <= 0) this.saxonArmy.splice(this.saxonArmy[randomSaxon], 1)
        return randomAttack
    }

    saxonAttack() {
        const randomViking = this.vikingArmy[Math.floor((Math.random() * this.vikingArmy.length))]
        const randomSaxon = this.saxonArmy[Math.floor((Math.random() * this.saxonArmy.length))]
        const randomAttack = randomViking.receiveDamage(randomSaxon.attack())
        if (randomViking.health <= 0) this.vikingArmy.splice(this.vikingArmy[randomViking], 1)
        return randomAttack
    }

    showStatus() {
        if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!'
        else if (this.vikingArmy.length === 0) return 'Saxons have fought for their lives and survive another day...'
        else return 'Vikings and Saxons are still in the thick of battle.'
    }
}


// new soldier
const soldier = new Soldier(120, 30)
console.log(soldier.attack())
console.log(soldier.receiveDamage(50))
console.log(soldier.health)

// new viking
const viking = new Viking('Carlitos', 120, 30)
console.log(viking.attack())
console.log(viking.receiveDamage(10))
console.log(viking.health)
console.log(viking.battleCry())

// new saxon
const saxon = new Saxon(120, 30)
console.log(saxon.attack())
console.log(saxon.receiveDamage(130))
console.log(saxon.health)

// new war
const war = new War
war.addViking(new Viking('Itadori', 200, 50))
war.addViking(new Viking('Satoru', 200, 50))
war.addViking(new Viking('Random Viking', 200, 50))
console.log(war.vikingArmy)
war.addSaxon(new Saxon(50, 50))
war.addSaxon(new Saxon(50, 50))
war.addSaxon(new Saxon(50, 50))
console.log(war.saxonArmy)
console.log(war.vikingAttack())
console.log(war.saxonArmy)
console.log(war.saxonAttack())
console.log(war.vikingAttack())
console.log(war.vikingAttack())
console.log(war.saxonArmy)
console.log(war.showStatus())