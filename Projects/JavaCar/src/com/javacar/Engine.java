package com.javacar;

public class Engine {
    private String model;
    private String id;
    private String type;
    private int cylinders;
    private int horsepower;
    private int speed = 0;
    private int maxSpeed;

    public Engine(String model, String id, String type, int cylinders, int horsepower, int maxSpeed) {
        this.model = model;
        this.id = id;
        this.type = type;
        this.cylinders = cylinders;
        this.horsepower = horsepower;
        this.maxSpeed = maxSpeed;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCylinders() {
        return cylinders;
    }

    public void setCylinders(int cylinders) {
        this.cylinders = cylinders;
    }

    public int getHorsepower() {
        return horsepower;
    }

    public void setHorsepower(int horsepower) {
        this.horsepower = horsepower;
    }

    public int getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(int maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public void changeSpeed(int speed) {
        if(speed < this.maxSpeed && speed > 0) {
            this.speed = speed;
        }else{
            System.out.println("Not a valid value");
        }
    }
}
