package com.sharans;

import java.util.Scanner;

public class Arrays2 {
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Enter length of array: ");
        int number = scanner.nextInt();
        int[] myIntegers = getIntegers(number);
        printArray(myIntegers);
        System.out.println(getAverage(myIntegers));

    }

    public static int[] getIntegers(int number) {
        System.out.println("Enter number: " + number + " integer array.\r");
        int[] values = new int[number];
        for (int i = 0; i < values.length; i++) {
            values[i] = scanner.nextInt();
        }
        return values;
    }

    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.println("Element: " + i + ", Value: " + array[i]);
        }
    }

    public static double getAverage(int[] array){
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
}
