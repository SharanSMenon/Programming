var Lion = /** @class */ (function () {
    function Lion(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
        this.Scientific = "Panthera Leo";
    }
    return Lion;
}());
function greeter(animal) {
    return animal.name + " is of the species: " + animal.Scientific + ". It is " + animal.age + " yrs old.";
}
var matsumi = new Lion("Matsumi", 15);
document.body.innerHTML = greeter(matsumi);
