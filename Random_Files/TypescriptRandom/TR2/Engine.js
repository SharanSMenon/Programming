"use strict";
exports.__esModule = true;
var Engine = /** @class */ (function () {
    function Engine(model, manufacturer, type, cylinders, horsepower) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._type = type;
        this._cylinders = cylinders;
        this._horsepower = horsepower;
    }
    Object.defineProperty(Engine.prototype, "model", {
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
    Object.defineProperty(Engine.prototype, "manufacturer", {
        /**
         * Getter manufacturer
         * @return {string}
         */
        get: function () {
            return this._manufacturer;
        },
        /**
         * Setter manufacturer
         * @param {string} value
         */
        set: function (value) {
            this._manufacturer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "type", {
        /**
         * Getter type
         * @return {string}
         */
        get: function () {
            return this._type;
        },
        /**
         * Setter type
         * @param {string} value
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "cylinders", {
        /**
         * Getter cylinders
         * @return {number}
         */
        get: function () {
            return this._cylinders;
        },
        /**
         * Setter cylinders
         * @param {number} value
         */
        set: function (value) {
            this._cylinders = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "horsepower", {
        /**
         * Getter horsepower
         * @return {number}
         */
        get: function () {
            return this._horsepower;
        },
        /**
         * Setter horsepower
         * @param {number} value
         */
        set: function (value) {
            this._horsepower = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * start
     */
    Engine.prototype.start = function () {
        console.log("Starting car.");
    };
    /**
     * stop
     */
    Engine.prototype.stop = function () {
        console.log("Car stopped");
    };
    return Engine;
}());
exports.Engine = Engine;
