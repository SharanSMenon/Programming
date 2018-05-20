"use strict";
exports.__esModule = true;
var Case = /** @class */ (function () {
    function Case(model, manufacturer, powerSupply, dimensions) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._powerSupply = powerSupply;
        this._dimensions = dimensions;
    }
    Object.defineProperty(Case.prototype, "model", {
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
    Object.defineProperty(Case.prototype, "manufacturer", {
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
    Object.defineProperty(Case.prototype, "powerSupply", {
        /**
         * Getter powerSupply
         * @return {string}
         */
        get: function () {
            return this._powerSupply;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "dimensions", {
        /**
         * Getter dimensions
         * @return {Dimensions}
         */
        get: function () {
            return this._dimensions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * powerUp
     */
    Case.prototype.powerUp = function () {
        console.log("Computer is on.");
    };
    /**
     * powerOff
     */
    Case.prototype.powerOff = function () {
        console.log("Computer is off.");
    };
    return Case;
}());
exports.Case = Case;
