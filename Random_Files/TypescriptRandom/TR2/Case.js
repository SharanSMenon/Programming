"use strict";
exports.__esModule = true;
var Case = /** @class */ (function () {
    function Case(color, metal, weight, finish, doors) {
        this._color = color;
        this._metal = metal;
        this._weight = weight;
        this._finish = finish;
        this._doors = doors;
    }
    Object.defineProperty(Case.prototype, "color", {
        /**
         * Getter color
         * @return {string}
         */
        get: function () {
            return this._color;
        },
        /**
         * Setter color
         * @param {string} value
         */
        set: function (value) {
            this._color = value;
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
        /**
         * Setter metal
         * @param {string} value
         */
        set: function (value) {
            this._metal = value;
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
    Object.defineProperty(Case.prototype, "finish", {
        /**
         * Getter finish
         * @return {string}
         */
        get: function () {
            return this._finish;
        },
        /**
         * Setter finish
         * @param {string} value
         */
        set: function (value) {
            this._finish = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Case.prototype, "doors", {
        /**
         * Getter doors
         * @return {number}
         */
        get: function () {
            return this._doors;
        },
        /**
         * Setter doors
         * @param {number} value
         */
        set: function (value) {
            this._doors = value;
        },
        enumerable: true,
        configurable: true
    });
    return Case;
}());
exports.Case = Case;
