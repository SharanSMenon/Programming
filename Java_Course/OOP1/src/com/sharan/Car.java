package com.sharan;

public class Car {
    private int doors;
    private int wheels;
    public String model;
    private String engine;
    private String color;
    public double price;

    public void setColor(String color) {
        this.color = color;
    }

    public void setModel(String model){
        this.model = model;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public int getDoors() {
        return doors;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setWheels(int wheels) {
        this.wheels = wheels;
    }

    public String getEngine() {
        return engine;
    }

    public String getColor() {
        return color;
    }

    public int getWheels() {
        return wheels;
    }

    public double getPrice() {
        return price;
    }

    public String getModel() {
        return this.model;
    }

    public void setDoors(int doors1){
        this.doors = doors1;
    }

}