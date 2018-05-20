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
        enumerable: true,
        configurable: true
    });
    /**
     * start
     */
    Engine.prototype.start = function () {
        console.log("Starting car.");
    };
    return Engine;
}());
exports.Engine = Engine;
