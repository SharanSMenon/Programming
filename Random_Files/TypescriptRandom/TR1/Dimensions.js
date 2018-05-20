"use strict";
exports.__esModule = true;
var Dimensions = /** @class */ (function () {
    function Dimensions(width, height, depth) {
        this._width = width;
        this._height = height;
        this._depth = depth;
    }
    Object.defineProperty(Dimensions.prototype, "width", {
        /**
         * Getter width
         * @return {number}
         */
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "height", {
        /**
         * Getter height
         * @return {number}
         */
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "depth", {
        /**
         * Getter depth
         * @return {number}
         */
        get: function () {
            return this._depth;
        },
        enumerable: true,
        configurable: true
    });
    return Dimensions;
}());
exports.Dimensions = Dimensions;
