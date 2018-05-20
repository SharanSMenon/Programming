package com.sharan;

// Java classes can be in a single file
class Movie {
    private String name;

    public Movie(String name) {
        this.name = name;
    }

    public String plot() {
        return "No plot here.";
    }

}

class Jaws extends Movie {
    public Jaws() {
        super("Jaws");
    }

    public String plot() {
        return "A shark eats lots of people.";
    }
}

class Jumanji extends Movie {
    public Jumanji() {
        super("Jumanji");
    }

    @Override
    public String plot() {
        return "A board game that releases wacky things.";
    }
}

class Spiderman extends Movie {
    public Spiderman() {
        super("Spiderman");
    }

    @Override
    public String plot() {
        return "Spiderman has to save NYC.";
    }
}

class StarWars extends Movie {
    public StarWars() {
        super("Star Wars");
    }

    @Override
    public String plot() {
        return "Imperial forces try to take over the galaxy";
    }
}

class Forgettable extends Movie {
    public Forgettable() {
        super("Forgettable");
    }

    // No plot
}

public class Main {
    public static void main(String[] args) {

    }
}

