class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
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
class Carnivore extends Animal {
  constructor(name, age){
    super(name, age);
    this.type = "Carnivore"
  }
  eat(animal){
    console.log("You have killed a "+this.kill);
  }
}
class Lion extends Carnivore {
  constructor(name, age, strength) {
    super(name, age);
    this.strength = strength;
    this.species = "Lion";
    this.level = 4;
    this.kill = "Wilderbeest";
  }
  roar(){
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
  roar(){
    console.log("Roar!");
  }
}
var l = new Lion('Killer',5, 60);
l.whoami();
l.eat();
console.log("----");
var t = new Tiger('Tigger',5, 90);
t.whoami();
t.eat()
console.log("----");
