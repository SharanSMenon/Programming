"use strict";
exports.__esModule = true;
var Motherboard = /** @class */ (function () {
    function Motherboard($$model, $$id, $$RAMSlots, $$manufacturer, $$bios, $$cardSlots) {
        this.$model = $$model;
        this.$id = $$id;
        this.$RAMSlots = $$RAMSlots;
        this.$manufacturer = $$manufacturer;
        this.$bios = $$bios;
        this.$cardSlots = $$cardSlots;
    }
    Object.defineProperty(Motherboard.prototype, "model", {
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
    Object.defineProperty(Motherboard.prototype, "id", {
        /**
         * Getter ID
         * @return {string}
         */
        get: function () {
            return this.$id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Motherboard.prototype, "RAMSlots", {
        /**
         * Getter RAMSlots
         * @return {number}
         */
        get: function () {
            return this.$RAMSlots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Motherboard.prototype, "manufacturer", {
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
    Object.defineProperty(Motherboard.prototype, "bios", {
        /**
         * Getter bios
         * @return {string}
         */
        get: function () {
            return this.$bios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Motherboard.prototype, "cardSlots", {
        /**
         * Getter cardSlots
         * @return {number}
         */
        get: function () {
            return this.$cardSlots;
        },
        enumerable: true,
        configurable: true
    });
    return Motherboard;
}());
exports.Motherboard = Motherboard;
