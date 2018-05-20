package com.sharan;

public class Main {

    public static void main(String[] args) {
        Dimensions dimensions = new Dimensions(13, 15, 1);
        Case theCase = new Case("220b", "Dell", "240", dimensions);
//        Resolution resolution = new Resolution(100,100)
        Monitor monitor = new Monitor("70c", "Dell", 100, new Resolution(2540, 1440));
        Motherboard motherboard = new Motherboard("B2-7200", "Microsoft", 4, 1, "v2.45");
        PC thePC = new PC(theCase, monitor, motherboard);
        System.out.println("Accessing methods with composition.");
        thePC.getMonitor().drawPixelAt(1500, 1200, "red");
        thePC.powerUp();
        // Bedroom
        Wall wall1 = new Wall("north");
        Wall wall2 = new Wall("south");
        Wall wall3 = new Wall("east");
        Wall wall4 = new Wall("west");
        Ceiling ceiling = new Ceiling(12, "white");
        Lamp lamp = new Lamp("Modern", false, 100);
        Bed bed = new Bed("Queen",6,3,3,2);
        Bedroom myRoom = new Bedroom("Sharan's room",wall1,wall2,wall3,wall4,ceiling,bed,lamp);

    }

}
