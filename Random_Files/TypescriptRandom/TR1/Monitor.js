"use strict";
exports.__esModule = true;
var Monitor = /** @class */ (function () {
    function Monitor($$model, $$manufacturer, $$size, $$nativeResolution) {
        this.$model = $$model;
        this.$manufacturer = $$manufacturer;
        this.$size = $$size;
        this.$nativeResolution = $$nativeResolution;
    }
    Object.defineProperty(Monitor.prototype, "model", {
        /**
         * Getter model
         * @return {string}
         */
        get: function () {
            return this.$model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monitor.prototype, "manufacturer", {
        /**
         * Getter manufacturer
         * @return {string}
         */
        get: function () {
            return this.$manufacturer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monitor.prototype, "nativeResolution", {
        /**
         * Getter nativeResolution
         * @return {Resolution}
         */
        get: function () {
            return this.$nativeResolution;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monitor.prototype, "size", {
        /**
         * Getter size
         * @return {number}
         */
        get: function () {
            return this.$size;
        },
        enumerable: true,
        configurable: true
    });
    return Monitor;
}());
exports.Monitor = Monitor;
