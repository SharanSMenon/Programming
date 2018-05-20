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
        /**
         * Setter model
         * @param {string} value
         */
        set: function (value) {
            this._model = value;
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
        /**
         * Setter touchscreen
         * @param {boolean} value
         */
        set: function (value) {
            this._touchscreen = value;
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
        /**
         * Setter TV
         * @param {boolean} value
         */
        set: function (value) {
            this._TV = value;
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
        /**
         * Setter rearCamera
         * @param {boolean} value
         */
        set: function (value) {
            this._rearCamera = value;
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
        /**
         * Setter AirConditioning
         * @param {boolean} value
         */
        set: function (value) {
            this._AirConditioning = value;
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
        /**
         * Setter AirBag
         * @param {boolean } value
         */
        set: function (value) {
            this._AirBag = value;
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
        /**
         * Setter OS
         * @param {string} value
         */
        set: function (value) {
            this._OS = value;
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
        /**
         * Setter ACRange
         * @param {Array<number>} value
         */
        set: function (value) {
            this._ACRange = value;
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
        /**
         * Setter temperature
         * @param {number } value
         */
        set: function (value) {
            this._temperature = value;
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
