package com.sharan;

public class Animal {
    private boolean brain;
    private boolean body;
    private int size;
    private int weight;
    private String name;

    public Animal(boolean brain, boolean body, int size, int weight, String name) {
        this.brain = brain;
        this.body = body;
        this.size = size;
        this.weight = weight;
        this.name = name;
    }

    public void eat() {
        System.out.println("Ate something");
    }

    public void move(double feet) {
        System.out.println("Moved " + feet + " feet.");
    }

    public boolean isBrain() {
        return brain;
    }

    public boolean getBody() {
        return body;
    }

    public int getSize() {
        return size;
    }

    public int getWeight() {
        return weight;
    }

    public String getName() {
        return name;
    }
}
