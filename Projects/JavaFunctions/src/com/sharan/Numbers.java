package com.sharan;

public class Numbers {
    /**
     * To make sure that this cannot be initialized.
     */
    private Numbers() {
    }

    /**
     * Checks if number is even
     *
     * @param x
     * @return
     */
    public static boolean isEven(int x) {
        return x % 2 == 0;
    }

    /**
     * Checks if number is odd
     *
     * @param x
     * @return
     */
    public static boolean isOdd(int x) {
        return x % 2 == 1;
    }

    /**
     * Checks if number is prime     *
     *
     * @param x
     */
    public static boolean isPrime(int x) {
        for (int i = 2; i < x / 2; i++) {
            if (i % 2 == 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * @param a
     * @param b Uses recursion
     */
    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }

        int ap = a % b;
        return gcd(b, ap);
    }

    /**
     * @param a
     * @param b
     * @return a * b / gcd of a and b
     */
    public static long lcm(int a, int b) {
        return a * b / gcd(a, b);
    }

    /**
     * @param a
     * @param b
     * @param C
     * @return length of side c
     */
    public static double lawOfCosinesNormal(double a, double b, double C) {
        C = Math.toRadians(C);
        return Math.sqrt(((Math.pow(a, 2) + Math.pow(b, 2)) - (2 * a * b * (Math.cos(C)))));
    }

    /**
     * @param a
     * @param b
     * @param c
     * @return C in degrees
     */
    public static double lawOfCosinesGamma(double a, double b, double c) {
        return Math.toDegrees(Math.acos(((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b))));
    }

    /**
     * Uses the Pythagorean Theorem to find length of side c
     *
     * @param a
     * @param b
     * @return length of side C
     */
    public static double pythagoreanTheoremHypotenuse(double a, double b) {
        return Math.sqrt(Math.pow(a, 2d) + Math.pow(b, 2d));
    }

    /**
     * Main method
     *
     * @param args
     */
    public static void main(String[] args) {
        System.out.println("10 is prime: " + isPrime(10));
        System.out.println("5 is prime: " + isPrime(5));
        System.out.println("LCM of 534 and 343: " + lcm(534, 343));
        System.out.println("Law of cosines for a = 5, b = 4, and C = 60: " + lawOfCosinesNormal(5, 4, 60));
        System.out.println("Calculating C with law of cosines when a = 5, b = 4, and c = 6: " + lawOfCosinesGamma(5, 4, 6));
        System.out.println("Finding the hypotenuse using the Pythagorean Theorem when a = 3 and b = 4: " + pythagoreanTheoremHypotenuse(3d, 4d));
    }


}
