package com.sharans;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        ArrayList<Integer> items = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            items.add(i);
        }
        DoubleElements(items);
    }

    private static void DoubleElements(ArrayList<Integer> array){
        for (int i: array){
            System.out.println(Math.pow((double) i, 2d));
        }
    }
}
