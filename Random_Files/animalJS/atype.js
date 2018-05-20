const { Animal } = require('./animal');
class Carnivore extends Animal {
    constructor(name, age) {
        super(name, age);
        this.type = "Carnivore"
    }
    get type() {
        return this._type;
    }
    eat(animal) {
        console.log("You have killed a " + this.kill);
    }
    getAge() {
        return this.age;
    }
    whoami() {
        console.log("My name is " + this.name + " and I am a " + this.type);
        console.log("I am a " + this.species);
    }
    status() {
        console.log("Animal is fine");
    }
}
// a = new Animal()
class Herbivore extends Animal {
    constructor(name, age) {
        super(name, age);
        this._type = "Herbivore";
    }
    get type(){
        return this._type;
    }
    eat() {
        console.log("You have eaten leaves");
    } 
    getAge() {
        return this.age;
    }
    whoami() {
        console.log("My name is " + this.name + " and I am a " + this.type);
        console.log("I am a " + this.species);
    }
    status() {
        console.log("Animal is fine");
    }
}