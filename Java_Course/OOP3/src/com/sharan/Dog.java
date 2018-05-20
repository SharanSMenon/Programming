package com.sharan;

public class Dog extends Animal {
    private String breed;
    private int eyes;
    private int teeth;
    private String coat;
    private int legs;

    public Dog(int size, int weight, String name, String breed, int eyes, int teeth, String coat, int legs) {
        super(true, true, size, weight, name);
        this.breed = breed;
        this.eyes = eyes;
        this.teeth = teeth;
        this.coat = coat;
        this.legs = legs;
    }

    public String getBreed() {
        return breed;
    }

    public int getEyes() {
        return eyes;
    }

    public int getTeeth() {
        return teeth;
    }

    public String getCoat() {
        return coat;
    }

    public int getLegs() {
        return legs;
    }

    public void bark() {
        System.out.println("Bark!");
    }

    public void walk(double feet) {
        super.move(feet);
    }


}
