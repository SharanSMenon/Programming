package com.randomThings;

public class Main {

    public static void main(String[] args) {
        System.out.println("7 feet to inches: "+feetToInches(7));
        System.out.println("156 inches to feet: "+inchesToFeet(156));
    }
    public static int feetToInches(int feet){
        return feet*12;
    }
    public static double inchesToFeet(int inches){
        return inches/12d;
    }
}
