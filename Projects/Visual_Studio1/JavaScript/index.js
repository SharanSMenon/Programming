class Panda {
    constructor() {
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
    
    /**
     * Moves the animal the specified amount of meters
     * @param {number} meters 
     */
    move(meters) {
        console.log(`Animals moved ${meters} meters`);
    }

    /**
     * Eats some food
     */
    eat() {
        console.log("Ate some bamboo");
    }
}