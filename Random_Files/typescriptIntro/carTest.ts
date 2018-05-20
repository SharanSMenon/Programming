import {SuperCar,EngineCar} from './classes';
var engineCar: EngineCar = new EngineCar("1-ab", "Super-V8 5");
var car1: SuperCar = new SuperCar(250, engineCar, "Bugatti Veyron");
console.log(car1.engine.model)
car1.accelerate(100)
console.log(car1.speed);
car1.throttle(30)
console.log(car1.speed)