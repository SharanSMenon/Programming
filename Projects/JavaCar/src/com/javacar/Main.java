package com.javacar;

public class Main {

    public static void main(String[] args) {
        Engine engine = new Engine("Super Engine", "23a", "V16", 16, 6700, 376);
        Tank tank = new Tank(30, "Diesel", "STank 5", "23a", 12, 456.43);
        Hull hull = new Hull("Metallic", "Blue", "Chromium", 4, true, 240, 4, 8, "Leather", 4);
        SmartSystem smartSystem = new SmartSystem("Smart Sys 2", "grey", true, true, true, "Apple Play", 85, 58, 67);
        Car myCar = new Car(engine, tank, hull, smartSystem, "Ultimate raptor", 2_246, "Sharan Company", "45b-5432");
        myCar.getEngine().changeSpeed(234);
        System.out.println("The cost of the car was: " + myCar.getCost());
    }
}
