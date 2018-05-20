export class Engine {
    constructor(type, cylinders, model, id, horsepower) {
        this._type = type;
        this._cylinders = cylinders;
        this._model = model;
        this._id = id;
        this._horsepower = horsepower;
    }
    get type() {
        return this._type;
    }

    get cylinders() {
        return this._cylinders;
    }

    get model() {
        return this._model;
    }

    get id() {
        return this._id;
    }

    get horsepower() {
        return this._horsepower;
    }

    start() {
        console.log("Starting car");
    }

    stop() {
        console.log("Stopping car");
    }
}