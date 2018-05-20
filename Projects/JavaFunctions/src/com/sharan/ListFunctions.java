package com.sharan;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.*;

/**
 * There is nothing for lists yet except for an empty
 * constructor
 */
public class ListFunctions {
    /**
     * The ListFunctions class
     * A class that you can use to call methods on lists.
     */
    private ListFunctions() {
    }

    /**
     * Runs some tests on the functions
     * implemented in this class
     *
     * @param args
     */
    public static void main(String[] args) {
        List<Number> list = new ArrayList<>();
        for (long i = 2; i < 53; i++)
            if (i % 2 == 0)
                list.add(BigDecimal.valueOf((int) i * 2));
            else
                list.add(BigDecimal.valueOf((int) i * 2 - 3));
//        Collections.sort(list);
        // Outputting the list
        System.out.println("List: " + list);
        list = insertionSort(list);
        System.out.println("Sorted list: " + list);
        // Using binary search implemented in this class.
        System.out.println("Using the binary search method the index of 43 will be found in this list");
        double start = System.nanoTime();
        long bs1 = (long) binarySearch(list, BigInteger.valueOf((long) 43));
//        long bs1 = linearSearch(list, BigInteger.valueOf(43));
        double end = System.nanoTime();
        double duration = end - start;
        System.out.println("Index of 43: " + bs1);
        System.out.println("Using the found index: " + list.get((int) bs1));
        System.out.println("It does indeed work");
    }

    /**
     * Uses the binary search method to search through a list
     * for the index of an particular element
     *
     * @param list
     * @param key
     * @return long
     */
    public final static Number binarySearch(List<Number> list, BigInteger key) {
        Long high = (long) list.size();
        Long low = 0L;
        if (high.compareTo(low) == -1) {
            return -1;
        }
        Long mid = low + ((high - low) / 2);
        try {
            Long ignore = (long) list.get(mid.intValue()).longValue();
        } catch (IndexOutOfBoundsException e) {
            return -1;
        }
        if (key.equals(list.get(mid.intValue()))) return mid;
        else if (key.compareTo(BigInteger.valueOf(list.get(mid.intValue()).longValue())) < 0)
            return binarySearch(list, key, low, mid - 1);
        else return binarySearch(list, key, mid + 1, high);
    }

    /**
     * Overloaded method for the other binary search method
     * to use.
     *
     * @param list
     * @param key
     * @param low
     * @param high
     * @return
     */
    public final static Number binarySearch(List<Number> list, BigInteger key, Long low, Long high) {
        if (high.compareTo(low) == -1) return low - 1;
        Long mid = low + ((high - low) / 2);
        try {
            Long ignore = (long) list.get(mid.intValue()).longValue();
        } catch (IndexOutOfBoundsException e) {
            return -1;
        }
        if (key.equals(list.get(mid.intValue()))) return mid;
        else if (key.compareTo(BigInteger.valueOf(list.get(mid.intValue()).longValue())) == -1) {
            return binarySearch(list, key, low, mid - 1);
        } else {
            return binarySearch(list, key, mid + 1, high);
        }
    }

    /**
     * Sorts an array using the insertion sort method.
     *
     * @param array
     * @return
     */
    public final static List<Number> insertionSort(List<Number> array) {
        List<Number> returnList = (List<Number>) new ArrayList<>(array).clone();
        for (int i = 1; i < returnList.size(); i++) {
            BigInteger current = BigInteger.valueOf(returnList.get(i).longValue());
            int position = i;
            while (position > 0 && BigInteger.valueOf(returnList.get(position - 1).longValue()).compareTo(current) == 1) {
                returnList.set(position, returnList.get(position - 1));
                position -= 1;
            }
            returnList.set(position, current);
        }
        return returnList;
    }

    /**
     * Uses the linear search method. Much slower than Binary Search
     *
     * @param array
     * @param key
     * @return
     */
    public static final long linearSearch(List<Number> array, Number key) {
        long index = 0;
        for (long i = 0; i < array.size(); i++) {
            if (array.get((int) i).equals(key)) {
                index = i;
                return i;
            }
        }
        return -1;
    }

}
