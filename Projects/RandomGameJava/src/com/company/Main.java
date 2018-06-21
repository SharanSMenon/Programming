package com.company;

import java.util.Random;
import java.util.Scanner;

public class Main {
    public final static Random random = new Random();
    public final static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("The goal of this game is to guess a random number in under 5 tries");
        System.out.println("Enter your name: ");
        String name = scanner.nextLine();
        boolean quit = false;
        do {
            game();
            System.out.println("Do you want to quit? (Y / N)");
            scanner.nextLine();
            String qt = scanner.nextLine();
            quit = qt.equals("Y") || qt.equals("y");
        } while (!quit);
    }

    public static void game() {
        boolean correct = false;
        int rand = random.nextInt(100) + 1;
        int tries = 0;
        while (!correct) {
            System.out.println("Enter number: ");
            tries++;
            int number = scanner.nextInt();
            String status = (number == rand) ? "Correct" : (number > rand) ? "Too high" : "Too low";
            String msg = status.equals("Correct") ? "Correct, you got it in " + tries + " tries" : status;
            correct = status.equals("Correct");
            System.out.println(msg);
        }
        scanner.nextLine();

    }
}
