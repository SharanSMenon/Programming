var Person = /** @class */ function() {
  function Person(age, height, weight, name, health) {
    this._age = age;
    this._height = height;
    this._weight = weight;
    this._name = name;
    this._health = health;
  }

  Object.defineProperty(Person.prototype, "age", {
    get: function() {
      return this._age;
    },
    set: function(value) {
      this._age = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Person.prototype, "weight", {
    get: function() {
      return this._weight;
    },
    set: function(value) {
      this._weight = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Person.prototype, "height", {
    get: function() {
      return this._height;
    },
    set: function(value) {
      this._height = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Person.prototype, "name", {
    get: function() {
      return this._name;
    },
    set: function(value) {
      this._name = value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Person.prototype, "health", {
    get: function() {
      return this._health;
    },
    set: function(value) {
      this._health = value;
    },
    enumerable: true,
    configurable: true
  });

  Person.prototype.decreaseHealth = function(value) {
    if (value <= 0) {
      this.health -= value;
      console.log("Health decreased");
    } else {
      console.log("Not a valid amount");
    }
  };
};
