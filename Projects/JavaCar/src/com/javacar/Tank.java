package com.javacar;

public class Tank {
    private int capacity;
    private String fuelType;
    private String model;
    private String id;
    private int amountOfFuel;
    private double weight;

    public Tank(int capacity, String fuelType, String model, String id, int amountOfFuel, double weight) {
        this.capacity = capacity;
        this.fuelType = fuelType;
        this.model = model;
        this.id = id;
        this.amountOfFuel = amountOfFuel;
        this.weight = weight;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getAmountOfFuel() {
        return amountOfFuel;
    }

    public void setAmountOfFuel(int amountOfFuel) {
        this.amountOfFuel = amountOfFuel;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }


}
