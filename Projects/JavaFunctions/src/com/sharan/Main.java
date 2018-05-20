package com.sharan;

import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Scanner;

public class Main {
    private static Scanner scanner = new Scanner(System.in);

    /**
     * Main method
     * Note: If you run the individual files, you
     * will see the tests run for them
     *
     * @param args
     */
    public static void main(String[] args) {
        boolean quit = false;
        printInstructions();
        do {
            System.out.println("Enter your choice: ");
            int choice = scanner.nextInt();
            switch (choice) {
                case 0:
                    printInstructions();
                    break;
                case 1:
                    numberHandler();
                    break;
                case 2:
                    stringHandler();
                    break;
                case 3:
                    quit = true;
                    break;
                default:
                    System.out.println("Not an valid option");
            }
        } while (!quit);
        System.out.println("✔ Bye ✔");
    }

    /**
     * Prints instructions
     */
    public static void printInstructions() {
        System.out.println("Welcome.");
        System.out.println("You can choose from a few options");
        System.out.println("0 - Print Instructions");
        System.out.println("1 - Choose a number method");
        System.out.println("2 - Choose a string method");
        System.out.println("3 - Quit");
    }

    /**
     * Print Instructions for numbers
     */
    public static void printNumberInstructions() {
        System.out.println("These are instructions for the number functions");
        System.out.println("0 - Print Instructions");
        System.out.println("1 - Find Gamma using law of cosines");
        System.out.println("2 - Find length of side c using law of cosines");
        System.out.println("3 - Find nth fibonacci number");
        System.out.println("4 - Check is number is even");
        System.out.println("5 - Use Pythagorean theorem to find hypotenuse");
    }

    /**
     * Handle number functions
     */
    public static void numberHandler() {
        printNumberInstructions();
        System.out.println("To exit the number functions, enter a value greater than 10");
        System.out.println("Choose a number method: ");
        int choice = scanner.nextInt();
        double a, b, c, gamma, n;
        switch (choice) {
            case 0:
                printNumberInstructions();
                break;
            case 1:
                System.out.println("Enter a: ");
                a = scanner.nextDouble();
                System.out.println("Enter b: ");
                b = scanner.nextDouble();
                System.out.println("Enter c: ");
                c = scanner.nextDouble();
                System.out.println("Gamma: " + Numbers.lawOfCosinesGamma(a, b, c));
                break;
            case 2:
                System.out.println("Enter a: ");
                a = scanner.nextDouble();
                System.out.println("Enter b: ");
                b = scanner.nextDouble();
                System.out.println("Enter gamma: ");
                gamma = scanner.nextDouble();
                System.out.println("C: " + Numbers.lawOfCosinesNormal(a, b, gamma));
                break;
            case 3:
                System.out.println("Enter n: ");
                n = scanner.nextDouble();
                System.out.printf("Answer: %s%n", Fibonacci.fibonacci((int) n));
                break;
            case 4:
                System.out.println("Enter your number");
                int evenNumber = scanner.nextInt();
                System.out.println("Answer: " + Numbers.isEven(evenNumber));
                break;
            case 5:
                System.out.println("Enter a: ");
                a = scanner.nextDouble();
                System.out.println("Enter b: ");
                b = scanner.nextDouble();
                System.out.println("Answer: " + Numbers.pythagoreanTheoremHypotenuse(a, b));
                break;
            default:
                System.out.println("Not a valid option");
                break;
        }
    }

    /**
     * Prints String instructions
     */
    public static void printStringInstructions() {
        System.out.println("0 - Print Instructions");
        System.out.println("1 - Encrypt a string");
        System.out.println("2 - Decrypt a string");
        System.out.println("3 - Check if string is a palindrome");
        System.out.println("4 - Reverse a string");
    }

    /**
     * Handles string functions
     */
    public static void stringHandler() {
        printStringInstructions();
        System.out.println("Choose a string method: ");
        int choice = scanner.nextInt();
        String defaultCipher = "qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM0987654321)(*&^%$#@!][{/}-+=_<?>:;~'`";
        String strToEncrypt, strToDecrypt, strToReverse, checkPalinStr, cipher;
        switch (choice) {
            case 0:
                printStringInstructions();
                break;
            case 1:
                System.out.println("Enter your string: ");
                scanner.nextLine();
                strToEncrypt = scanner.nextLine();
                System.out.println("Enter 1 to use default cipher");
                System.out.println("Enter your cipher: ");
                cipher = scanner.nextLine();
                if (cipher.equals("1")) {
                    System.out.println("Encrypted string: " + StringFunctions.encrypt(strToEncrypt, defaultCipher));
                } else {
                    System.out.println("Encrypted string:" + StringFunctions.encrypt(strToEncrypt, cipher));
                }
                break;
            case 2:
                System.out.println("Enter your string: ");
                scanner.nextLine();
                strToDecrypt = scanner.nextLine();
                System.out.println("Enter 1 to use default cipher");
                System.out.println("Enter your cipher: ");
                cipher = scanner.nextLine();
                if (cipher.equals("1")) {
                    System.out.println("Decrypted string: " + StringFunctions.decrypt(strToDecrypt, defaultCipher));
                } else {
                    System.out.println("Decrypted string:" + StringFunctions.decrypt(strToDecrypt, cipher));
                }
                break;
            case 3:
                System.out.println("Enter your string: ");
                scanner.nextLine();
                checkPalinStr = scanner.nextLine();
                System.out.println("Answer: " + StringFunctions.checkPalindrome(checkPalinStr));
                break;
            case 4:
                System.out.println("Enter string to reverse: ");
                scanner.nextLine();
                strToReverse = scanner.nextLine();
                System.out.println("Here is your reversed string: " + StringFunctions.reverse(strToReverse));
                break;
            default:
                System.out.println("Not an valid option.");
                break;
        }


    }
}