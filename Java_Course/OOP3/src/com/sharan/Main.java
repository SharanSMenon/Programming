package com.sharan;

public class Main {

    public static void main(String[] args) {
        Animal animal = new Animal(true, true, 100, 100, "Animal");
        Dog dog = new Dog(100, 100, "Dog", "Yorkie", 2, 24, "Brown", 4);
        dog.eat();
        dog.walk(10d);
    }
}
