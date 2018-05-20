"use strict";
exports.__esModule = true;
var EngineCar = /** @class */ (function () {
    function EngineCar($id, $model) {
        this.$type = "V8";
        this.$id = $id;
        this.$model = $model;
    }
    Object.defineProperty(EngineCar.prototype, "id", {
        get: function () {
            return this.$id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EngineCar.prototype, "type", {
        get: function () {
            return this.$type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EngineCar.prototype, "model", {
        get: function () {
            return this.$model;
        },
        enumerable: true,
        configurable: true
    });
    return EngineCar;
}());
exports.EngineCar = EngineCar;
var SuperCar = /** @class */ (function () {
    function SuperCar(maxSpeed, engineCar, model) {
        this.$speed = 0;
        this.$engineCar = engineCar;
        this.$maxSpeed = maxSpeed || 169;
        this.$model = model;
    }
    Object.defineProperty(SuperCar.prototype, "engine", {
        get: function () {
            return this.$engineCar;
        },
        enumerable: true,
        configurable: true
    });
    SuperCar.numberOfWheels = function () {
        return 4;
    };
    SuperCar.prototype.accelerate = function (speed) {
        this.$speed += speed;
    };
    SuperCar.prototype.throttle = function (speed) {
        this.$speed -= speed;
    };
    Object.defineProperty(SuperCar.prototype, "speed", {
        get: function () {
            return this.$speed;
        },
        enumerable: true,
        configurable: true
    });
    return SuperCar;
}());
exports.SuperCar = SuperCar;
// console.log 
