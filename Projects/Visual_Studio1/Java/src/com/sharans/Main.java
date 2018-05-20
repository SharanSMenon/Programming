package com.sharans;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World");
        ArrayList<BigInteger> bg = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            bg.add(BigInteger.valueOf((long) i));
        }
        printArray(bg);
    }

    public static void printArray(ArrayList<BigInteger> array) {
        for (int i = 0; i < array.size(); i++) {
            System.out.println("Element " + i + ", Value: " + array.get(i));
        }
    }
}
