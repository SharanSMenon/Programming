package com.sharan;

public class ForLoops {
    public static void main(String[] args) {
        System.out.println("10000 at 1% interest = " + calculateInterest(10000.0d, 1.0d));
        // For loops
        for (int i = 2; i < 9; i++) {
            System.out.println("10000 at " + i + "% interest = " + String.format("%.2f", calculateInterest(10000d, i)));
        }
        System.out.println("-----");
        for (int i = 8; i > 1; i--) {
            System.out.println("10000 at " + i + "% interest = " + String.format("%.2f", calculateInterest(10000d, i)));
        }
        System.out.println(isPrime(7));
        System.out.println(isPrime(6));
        //While loops
        //Variable must be incremented manually and created before loop
        System.out.println("While loops");
        int count = 0;
        while (count != 5) {
            System.out.println("Count is :" + count);
            count++;
        }
        count = 0;
        System.out.println("Second type of while loop");
        while (true) {
            if (count == 5) {
                break;
            }
            System.out.println("Count is " + count);
            count++;
        }
        // Do While
        System.out.println("Do while");
        count = 0;
        do {
            System.out.println("Count value was " + count);
            count++;
        } while (count != 5);
        System.out.println("isEven test");
        System.out.println(isEven(7));
        System.out.println("Challenge");
        int number = 3;
        int finishN = 22;
        while (number <= finishN) {
            number++;
            if (!isEven(number))
                continue;
            System.out.println(number + " is even.");
        }
    }

    public static double calculateInterest(double amount, double interestRate) {
        return (amount * (interestRate / 100d));
    }

    public static boolean isPrime(int n) {
        if (n == 1) {
            return false;
        }
        for (int i = 2; i < n / 2; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
    // For loops are very important but printing can spam output
    // While loops can be used
    // While loops can go on endlessly if var not increment
}
