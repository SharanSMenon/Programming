package com.sharan;

public class Case {
    private String model;
    private String manufacterer;
    private String powerSupply;
    private Dimensions dimensions;

    public Case(String model, String manufacterer, String powerSupply, Dimensions dimensions) {
        this.model = model;
        this.manufacterer = manufacterer;
        this.powerSupply = powerSupply;
        this.dimensions = dimensions;
    }

    public void pressPowerButton(){
        System.out.println("Power button pressed");
    }

    public String getModel() {
        return model;
    }

    public String getManufacterer() {
        return manufacterer;
    }

    public String getPowerSupply() {
        return powerSupply;
    }

    public Dimensions getDimensions() {
        return dimensions;
    }
}
