package com.javacar;

public class Car {
    private Engine engine;
    private Tank tank;
    private Hull hull;
    private SmartSystem smartSystem;
    private String model;
    private int weight;
    private String manufacturer;
    private String licensePlate;
    private int cost;

    public Car(Engine engine, Tank tank, Hull hull, SmartSystem smartSystem, String model, int weight, String manufacturer, String licensePlate) {
        this.engine = engine;
        this.tank = tank;
        this.hull = hull;
        this.smartSystem = smartSystem;
        this.model = model;
        this.weight = weight;
        this.manufacturer = manufacturer;
        this.licensePlate = licensePlate;
        this.cost = weight * 16;
    }

    public Engine getEngine() {
        return engine;
    }

    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public Tank getTank() {
        return tank;
    }

    public void setTank(Tank tank) {
        this.tank = tank;
    }

    public Hull getHull() {
        return hull;
    }

    public void setHull(Hull hull) {
        this.hull = hull;
    }

    public SmartSystem getSmartSystem() {
        return smartSystem;
    }

    public void setSmartSystem(SmartSystem smartSystem) {
        this.smartSystem = smartSystem;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public int getCost() {
        return cost;
    }

    public void start(){
        System.out.println("Starting car");
    }

    public void stop(){
        System.out.println("Stopping car");
    }

}
