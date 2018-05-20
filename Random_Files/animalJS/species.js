const {Herbivore,Carnivore} = require('./atype');
class Lion extends Carnivore {
    constructor(name, age, strength) {
        super(name, age);
        this.strength = strength;
        this.species = "Lion";
        this.level = 4;
        this.kill = "Wilderbeest";
    }
    roar() {
        console.log("Roar!");
    }
}
class Tiger extends Carnivore {
    constructor(name, age, strength) {
        super(name, age);
        this.strength = strength;
        this.species = "Tiger";
        this.level = 6;
        this.kill = "Sambar deer";
    }
    roar() {
        console.log("Roar!");
    }
}
class Elephant extends Herbivore {
    constructor(name, age, strength) {
        super(name, age)        
        this._strength = strength;
        this._species = "Elephas Maximus"
        this._level = 8
    }
    get strength(){
        return this._strength
    }
    get level(){
        return this._level
    }
}