package com.sharans;

import java.lang.reflect.Array;
import java.math.BigInteger;
import java.util.ArrayList;

public class AutoboxingAndUnboxing {
    public static void main(String[] args) {
        String[] strArray = new String[10];
        int[] intArray = new int[10];
        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add("String one");
        Integer integer = 10;
        ArrayList<Integer> IntegerArray = new ArrayList<>();
        IntegerArray.add(34);
        IntegerArray.add(42);
        System.out.println(IntegerArray.get(1));
        Double myDouble = 10.2;
        double db = myDouble;
        System.out.println("Double: " + myDouble);
        Boolean bool = Boolean.FALSE;
        System.out.println("Boolean: " + bool);
        BigInteger bigint = BigInteger.TEN;
        System.out.println("Big Integer: " + bigint);
        for (int i = 0; i < 10; i++) {
            IntegerArray.add(i * 10);
        }
        printArray(IntegerArray);
    }

    public static void printArray(ArrayList<Integer> array) {
        for (int i = 0; i < array.size(); i++) {
            System.out.println("Element: " + i + ", Value: " + array.get(i));
        }
    }
}
