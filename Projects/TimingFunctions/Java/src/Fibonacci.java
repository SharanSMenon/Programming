import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Scanner;

public class Fibonacci {
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Enter n to find nth fibonacci number: ");
        int n = scanner.nextInt();
        long startTime = System.nanoTime();
        BigInteger answer1 = fastFibonacci(n);
        long endTime = System.nanoTime();
        long duration = (long) (endTime - startTime) / 10000;
        System.out.println("Fast fibonacci algorithm");
        System.out.println("Answer: " + answer1);
        System.out.println("Duration: " + duration + " nanoseconds");
        //Second algorithm
        startTime = System.nanoTime();
        BigInteger answer2 = normalFibonacci(n);
        endTime = System.nanoTime();
        duration = (long) (endTime - startTime) / 10000;
        System.out.println("----");
        System.out.println("Normal fibonacci algorithm");
        System.out.println("Answer: " + answer2);
        System.out.println("Duration: " + duration + " nanoseconds");
    }

    private static BigInteger BigIntegerMultiply(BigInteger a, BigInteger b) {
        return a.multiply(b);
    }

    public static BigInteger fastFibonacci(int n) {
        BigInteger a = BigInteger.ZERO;
        BigInteger b = BigInteger.ONE;
        int m = 0;
        for (int bit = Integer.highestOneBit(n); bit != 0; bit >>>= 1) {
            BigInteger d = BigIntegerMultiply(a, b.shiftLeft(1).subtract(a));
            BigInteger e = BigIntegerMultiply(a, a).add(BigIntegerMultiply(b, b));
            a = d;
            b = e;
            m *= 2;
            if ((n & bit) != 0) {
                BigInteger c = a.add(b);
                a = b;
                b = c;
                m++;
            }
        }
        return a;
    }
    public static BigInteger normalFibonacci(int n) {
        ArrayList<BigInteger> f = new ArrayList<>();
        f.add(BigInteger.ZERO);
        f.add(BigInteger.ONE);
        for (int i = 2; i < n + 1; i++) {
            f.add(f.get(i - 1).add(f.get(i - 2)));
        }
        return f.get(n);
    }
}