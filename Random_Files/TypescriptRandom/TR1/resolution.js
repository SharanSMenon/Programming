"use strict";
exports.__esModule = true;
var Resolution = /** @class */ (function () {
    function Resolution($$height, $$width) {
        this.$height = $$height;
        this.$width = $$width;
    }
    Object.defineProperty(Resolution.prototype, "height", {
        /**
         * Getter height
         * @return {number}
         */
        get: function () {
            return this.$height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Resolution.prototype, "width", {
        /**
         * Getter width
         * @return {number}
         */
        get: function () {
            return this.$width;
        },
        enumerable: true,
        configurable: true
    });
    return Resolution;
}());
exports.Resolution = Resolution;
