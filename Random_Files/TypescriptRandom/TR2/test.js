"use strict";
exports.__esModule = true;
// Imports
var Car_1 = require("./Car");
var Engine_1 = require("./Engine");
var Case_1 = require("./Case");
var SmartSystem_1 = require("./SmartSystem");
var Tank_1 = require("./Tank");
// Creating variables and classes
var tank = new Tank_1.Tank(200, "Tank-200", 23, "Diesel");
var engine = new Engine_1.Engine("Super V16", "Bugatti", "V16", 16, 4200);
var smartsys = new SmartSystem_1.SmartSystem("Smart 50", true, true, true, true, "Windows", [50, 87]);
var theCase = new Case_1.Case("Blue", "Chromium", 80, "Metallic", 4);
var myCar = new Car_1.Car(engine, theCase, smartsys, tank, 2500, "Bugatti Veryon V16");
// Code
myCar.powerUp();
myCar.theTank.refuel(14);
console.log(myCar.theTank.capacity);
console.log(myCar.theTank.amountOfFuel);
myCar.smartSystem.OS = "Apple Play";
console.log("Os for car: " + myCar.smartSystem.OS);
