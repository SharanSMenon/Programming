"use strict";
exports.__esModule = true;
var SmartSystem = /** @class */ (function () {
    function SmartSystem(model, touchscreen, TV, rearCamera, AirConditioning, OS, ACRange) {
        this._AirBag = true;
        this._temperature = 0;
        this._model = model;
        this._touchscreen = touchscreen;
        this._TV = TV;
        this._rearCamera = rearCamera;
        this._AirConditioning = AirConditioning;
        this._OS = OS;
        if (this._AirConditioning) {
            this._ACRange = ACRange;
            this._temperature = this._ACRange[0];
        }
    }
    Object.defineProperty(SmartSystem.prototype, "model", {
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
    Object.defineProperty(SmartSystem.prototype, "touchscreen", {
        /**
         * Getter touchscreen
         * @return {boolean}
         */
        get: function () {
            return this._touchscreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSystem.prototype, "TV", {
        /**
         * Getter TV
         * @return {boolean}
         */
        get: function () {
            return this._TV;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSystem.prototype, "rearCamera", {
        /**
         * Getter rearCamera
         * @return {boolean}
         */
        get: function () {
            return this._rearCamera;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSystem.prototype, "AirConditioning", {
        /**
         * Getter AirConditioning
         * @return {boolean}
         */
        get: function () {
            return this._AirConditioning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSystem.prototype, "AirBag", {
        /**
         * Getter AirBag
         * @return {boolean }
         */
        get: function () {
            return this._AirBag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSystem.prototype, "OS", {
        /**
         * Getter OS
         * @return {string}
         */
        get: function () {
            return this._OS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSystem.prototype, "ACRange", {
        /**
         * Getter ACRange
         * @return {Array<number>}
         */
        get: function () {
            return this._ACRange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SmartSystem.prototype, "temperature", {
        /**
         * Getter temperature
         * @return {number }
         */
        get: function () {
            return this._temperature;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * turnAcOn
     */
    SmartSystem.prototype.turnAcOn = function (temp) {
        if (this.AirConditioning) {
            if (temp > this.ACRange[0] && temp < this.ACRange[1]) {
                console.log("Successfully changed the temperature.");
            }
            else {
                console.log("Cannot change the temperature.");
            }
        }
        else {
            console.log("Your car does not support air conditioning.");
        }
    };
    /**
     * playMusic
     */
    SmartSystem.prototype.playMusic = function (song) {
        console.log("Playing " + song);
    };
    /**
     * playMovie
     */
    SmartSystem.prototype.playMovie = function (movie) {
        if (this.TV) {
            console.log("Playing movie " + movie);
        }
        else {
            console.log("TV not supported on this car.");
        }
    };
    return SmartSystem;
}());
exports.SmartSystem = SmartSystem;
