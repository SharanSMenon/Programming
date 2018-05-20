package com.sharan;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public final class Fibonacci {
    // Creating a scanner for the main method
    private static Scanner scanner = new Scanner(System.in);

    /**
     * To make sure that this cannot be initialized
     */
    private Fibonacci() {
    }

    /**
     * This times the 2 algorithms in this class
     *
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("Enter a number: ");
        int n = scanner.nextInt();
        System.out.println("Answer: " + fibonacci(n));
        System.out.println("Enter another number: ");
        n = scanner.nextInt();
        BigInteger[] array = fibonacciList(n);
        printArray(array);
        System.out.println("Enter integer for the slower fibonacci algorithm: ");
        long j = scanner.nextLong();
        System.out.println("Answer from simple fibonacci: " + simpleFibonacci(j));

    }

    /**
     * Computes the nth fibonacci number
     *
     * @param n
     * @return nth fibonacci number
     */
    public final static BigInteger fibonacci(int n) {
        BigInteger a = BigInteger.ZERO;
        BigInteger b = BigInteger.ONE;
        int m = 0;
        for (int bit = Integer.highestOneBit(n); bit != 0; bit >>>= 1) {
            // Double it
            BigInteger d = multiply(a, b.shiftLeft(1).subtract(a));
            BigInteger e = multiply(a, a).add(multiply(b, b));
            a = d;
            b = e;
            m *= 2;
            // Advance by one conditionally
            if ((n & bit) != 0) {
                BigInteger c = a.add(b);
                a = b;
                b = c;
                m++;
            }
        }
        return a;
    }

    /**
     * Much simpler algorithm for computing fibonacci numbers;
     *
     * @param n
     * @return nth fibonacci number
     */
    public final static BigInteger simpleFibonacci(long n) {
        List<BigInteger> f = new ArrayList<>();
        f.add(BigInteger.ZERO);
        f.add(BigInteger.ONE);
        for (int i = 2; i < n + 1; i++) f.add(i, f.get(i - 1).add(f.get(i - 2)));
        int fn = (int) n;
        return f.get(fn);
    }

    /**
     * Helper function to multiply two BigIntegers
     *
     * @param x
     * @param y
     * @return x multiplied by y
     */
    private static BigInteger multiply(BigInteger x, BigInteger y) {
        return x.multiply(y);
    }

    /**
     * Creates a list of fibonacci numbers
     *
     * @param n
     * @return a list of fibonacci numbers from 0 to n
     */
    public static BigInteger[] fibonacciList(int n) {
        BigInteger[] returnArray = new BigInteger[n + 1];
        returnArray[0] = BigInteger.ZERO;
        returnArray[1] = BigInteger.ONE;
        for (int i = 2; i < returnArray.length; i++) {
            returnArray[i] = fibonacci(i);
        }
        return returnArray;
    }

    /**
     * Prints an array
     *
     * @param array
     */
    public static void printArray(BigInteger[] array) {
        for (int i = 0; i < array.length; i++) {
            System.out.println("Element " + i + ", Value: " + array[i]);
        }
    }

}
