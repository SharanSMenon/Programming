class Lion {
    Scientific: "Panthera Leo";
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
        this.Scientific = "Panthera Leo";
    }
}
interface Animal {
    Scientific: string;
    name: string;
    age: number;
}
function greeter(animal: Animal) {
    return animal.name + " is of the species: " + animal.Scientific + ". It is " + animal.age + " yrs old.";
}
let matsumi = new Lion("Matsumi", 15);
document.body.innerHTML = greeter(matsumi);