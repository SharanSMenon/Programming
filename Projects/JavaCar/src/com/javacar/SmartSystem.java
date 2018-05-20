package com.javacar;

public class SmartSystem {
    private String model;
    private String color;
    private boolean TV;
    private boolean rearCamera;
    private boolean AirConditioning;
    private String OS;
    private int ACmax;
    private int ACmin;
    private int temperature;
    private boolean ACOn;

    public SmartSystem(String model, String color, boolean TV, boolean rearCamera, boolean airConditioning, String OS, int ACmax, int ACmin, int temperature) {
        this.model = model;
        this.color = color;
        this.TV = TV;
        this.rearCamera = rearCamera;
        AirConditioning = airConditioning;
        this.OS = OS;
        this.ACmax = ACmax;
        this.ACmin = ACmin;
        this.temperature = temperature;
        this.ACOn = false;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public boolean isTV() {
        return TV;
    }

    public void setTV(boolean TV) {
        this.TV = TV;
    }

    public boolean isRearCamera() {
        return rearCamera;
    }

    public void setRearCamera(boolean rearCamera) {
        this.rearCamera = rearCamera;
    }

    public boolean isAirConditioning() {
        return AirConditioning;
    }

    public void setAirConditioning(boolean airConditioning) {
        AirConditioning = airConditioning;
    }

    public String getOS() {
        return OS;
    }

    public void setOS(String OS) {
        this.OS = OS;
    }

    public int getACmax() {
        return ACmax;
    }

    public void setACmax(int ACmax) {
        this.ACmax = ACmax;
    }

    public int getACmin() {
        return ACmin;
    }

    public void setACmin(int ACmin) {
        this.ACmin = ACmin;
    }

    public boolean isACOn() {

        return ACOn;
    }

    public int getTemperature() {

        return temperature;
    }

    public void turnAcOn(int temperature) {
        if (temperature <= getACmax() && temperature >= getACmax()) {
            System.out.println("Ac has been successfully turned on");
            this.ACOn = true;
        }
    }

    public void turnAcOff() {
        System.out.println("AC off");

    }
}
