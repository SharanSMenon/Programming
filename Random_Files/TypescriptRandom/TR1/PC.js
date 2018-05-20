"use strict";
exports.__esModule = true;
var PC = /** @class */ (function () {
    function PC(theCase, monitor, motherboard) {
        this._theCase = theCase;
        this._monitor = monitor;
        this._motherboard = motherboard;
    }
    Object.defineProperty(PC.prototype, "theCase", {
        /**
         * Getter theCase
         * @return {Case}
         */
        get: function () {
            return this._theCase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PC.prototype, "monitor", {
        /**
         * Getter monitor
         * @return {Monitor}
         */
        get: function () {
            return this._monitor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PC.prototype, "motherboard", {
        /**
         * Getter motherboard
         * @return {Motherboard}
         */
        get: function () {
            return this._motherboard;
        },
        enumerable: true,
        configurable: true
    });
    return PC;
}());
exports.PC = PC;
