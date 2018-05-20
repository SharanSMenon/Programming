package com.sharans;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

/**
 * Java2
 */
public class Java2 {

    public static Scanner scanner = new Scanner(System.in);

    /**
     * Main method
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("Array creating program");
        System.out.println("Enter length of array: ");
        int len = scanner.nextInt();
        ArrayList<BigInteger> bg = new ArrayList<>();
        for (int i = 0; i < len; i++) {
            System.out.println("Enter your number: ");
            BigInteger b = scanner.nextBigInteger();
            bg.add(b);
        }
        ArrayList sorted = (ArrayList<BigInteger>) bg.clone();
        Collections.sort(sorted);
        System.out.println("Original Array: " + bg);
        System.out.println("Sorted Array: " + sorted);
    }
}