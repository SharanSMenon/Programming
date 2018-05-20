"use strict";
exports.__esModule = true;
var Tank = /** @class */ (function () {
    function Tank(weight, model, capacity, fuelType) {
        this._amountOfFuel = 0;
        this._weight = weight;
        this._model = model;
        this._capacity = capacity;
        this._fuelType = fuelType;
    }
    Object.defineProperty(Tank.prototype, "weight", {
        /**
         * Getter weight
         * @return {number}
         */
        get: function () {
            return this._weight;
        },
        /**
         * Setter weight
         * @param {number} value
         */
        set: function (value) {
            this._weight = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tank.prototype, "model", {
        /**
         * Getter model
         * @return {string}
         */
        get: function () {
            return this._model;
        },
        /**
         * Setter model
         * @param {string} value
         */
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tank.prototype, "capacity", {
        /**
         * Getter capacity
         * @return {number}
         */
        get: function () {
            return this._capacity;
        },
        /**
         * Setter capacity
         * @param {number} value
         */
        set: function (value) {
            this._capacity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tank.prototype, "fuelType", {
        /**
         * Getter fuelType
         * @return {string}
         */
        get: function () {
            return this._fuelType;
        },
        /**
         * Setter fuelType
         * @param {string} value
         */
        set: function (value) {
            this._fuelType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tank.prototype, "amountOfFuel", {
        /**
         * Getter amountOfFuel
         * @return {number }
         */
        get: function () {
            return this._amountOfFuel;
        },
        /**
         * Setter amountOfFuel
         * @param {number } value
         */
        set: function (value) {
            this._amountOfFuel = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * refuel
     */
    Tank.prototype.refuel = function (gallons) {
        // console.log(`Gallons: `)
        if (this._amountOfFuel + gallons > this.capacity) {
            console.log("Not enough capacity");
        }
        else {
            console.log("Tank successfully refueled.");
            this._amountOfFuel += gallons;
        }
    };
    return Tank;
}());
exports.Tank = Tank;
