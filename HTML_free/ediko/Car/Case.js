"use strict";
exports.__esModule = true;
var Case = /** @class */ (function () {
    function Case(color, metal, weight, finish) {
        this._color = color;
        this._metal = metal;
        this._weight = weight;
        this._finish = finish;
    }
    Object.defineProperty(Case.prototype, "color", {
        /**
         * Getter color
         * @return {string}
         */
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "metal", {
        /**
         * Getter metal
         * @return {string}
         */
        get: function () {
            return this._metal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "weight", {
        /**
         * Getter weight
         * @return {number}
         */
        get: function () {
            return this._weight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "finish", {
        /**
         * Getter finish
         * @return {string}
         */
        get: function () {
            return this._finish;
        },
        enumerable: true,
        configurable: true
    });
    return Case;
}());
exports.Case = Case;
