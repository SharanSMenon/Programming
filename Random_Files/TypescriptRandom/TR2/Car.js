"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(theEngine, theCase, smartSystem, theTank, weight, model) {
        this._theEngine = theEngine;
        this._theCase = theCase;
        this._smartSystem = smartSystem;
        this._theTank = theTank;
        this._weight = weight;
        this._model = model;
    }
    Object.defineProperty(Car.prototype, "theEngine", {
        /**
         * Getter theEngine
         * @return {Engine}
         */
        get: function () {
            return this._theEngine;
        },
        /**
         * Setter theEngine
         * @param {Engine} value
         */
        set: function (value) {
            this._theEngine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "theCase", {
        /**
         * Getter theCase
         * @return {Case}
         */
        get: function () {
            return this._theCase;
        },
        /**
         * Setter theCase
         * @param {Case} value
         */
        set: function (value) {
            this._theCase = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "smartSystem", {
        /**
         * Getter smartSystem
         * @return {SmartSystem}
         */
        get: function () {
            return this._smartSystem;
        },
        /**
         * Setter smartSystem
         * @param {SmartSystem} value
         */
        set: function (value) {
            this._smartSystem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "theTank", {
        /**
         * Getter theTank
         * @return {Tank}
         */
        get: function () {
            return this._theTank;
        },
        /**
         * Setter theTank
         * @param {Tank} value
         */
        set: function (value) {
            this._theTank = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "weight", {
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
    Object.defineProperty(Car.prototype, "model", {
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
    Car.prototype.powerUp = function () {
        console.log("Powering up");
    };
    return Car;
}());
exports.Car = Car;
