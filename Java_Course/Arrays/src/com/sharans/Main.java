package com.sharans;

public class Main {

    public static void main(String[] args) {
        // Arrays
        double[] myFirstArray = new double[10];
        myFirstArray[5] = 50;
        System.out.println(myFirstArray[5]);
        int[] myIntArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
        System.out.println(myIntArray[6]);
        double[] myDoubleArray = new double[12];
        for (int i = 0; i < myDoubleArray.length; i++) {
            myDoubleArray[i] = i * 10;
        }
        System.out.println("---");
        for (int i = 0; i < myDoubleArray.length; i++) {
            System.out.println(myDoubleArray[i]);
        }
        printArray(myIntArray);
        System.out.println("---");

    }

    public static void printArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.println("Element: " + i + ", Value: " + array[i]);
        }
    }
}
