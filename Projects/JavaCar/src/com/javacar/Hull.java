package com.javacar;

public class Hull {
    private String finish;
    private String color;
    private String metal;
    private int doors;
    private boolean bulletProofGlass;
    private int weight;
    private int headlightLuminosity;
    private int seats;
    private String seatType;
    private int wheels;

    public Hull(String finish, String color, String metal, int doors, boolean bulletProofGlass, int weight, int headlightLuminosity, int seats, String seatType, int wheels) {
        this.finish = finish;
        this.color = color;
        this.metal = metal;
        this.doors = doors;
        this.bulletProofGlass = bulletProofGlass;
        this.weight = weight;
        this.headlightLuminosity = headlightLuminosity;
        this.seats = seats;
        this.seatType = seatType;
        this.wheels = wheels;
    }

    public String getFinish() {
        return finish;
    }

    public void setFinish(String finish) {
        this.finish = finish;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMetal() {
        return metal;
    }

    public void setMetal(String metal) {
        this.metal = metal;
    }

    public int getDoors() {
        return doors;
    }

    public void setDoors(int doors) {
        this.doors = doors;
    }

    public boolean isBulletProofGlass() {
        return bulletProofGlass;
    }

    public void setBulletProofGlass(boolean bulletProofGlass) {
        this.bulletProofGlass = bulletProofGlass;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getHeadlightLuminosity() {
        return headlightLuminosity;
    }

    public void setHeadlightLuminosity(int headlightLuminosity) {
        this.headlightLuminosity = headlightLuminosity;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public String getSeatType() {
        return seatType;
    }

    public void setSeatType(String seatType) {
        this.seatType = seatType;
    }

    public int getWheels() {
        return wheels;
    }

    public void setWheels(int wheels) {
        this.wheels = wheels;
    }
}
