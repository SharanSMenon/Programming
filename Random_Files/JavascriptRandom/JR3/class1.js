class Person {
  constructor(age, height, weight, name, health) {
    this._age = age;
    this._height = height;
    this._weight = weight;
    this._name = name;
    this._health = health;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    this._weight = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;
  }

  increaseHealth(value){
      this._health += value;
  }

  decreaseHealth(value){
      if (value <= 0 ) {
          this.health -= value;
      }
  }

}
module.exports.Person = Person;
