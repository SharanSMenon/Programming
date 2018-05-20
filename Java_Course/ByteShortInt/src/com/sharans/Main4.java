package com.sharans;

public class Main4 {
    public static void main(String[] args) {
        //Operators
        // =, +, -, *, /
        int result = 1 + 2;
        System.out.println("1 + 2 = " + result);
        int previousResult = result;
        result = result - 1;
        System.out.println(previousResult + " - 1 = " + result);
        previousResult = result;
        result = result * 10;
        System.out.println(previousResult + " * 10 = " + result);
        previousResult = result;
        result = result / 5;
        System.out.println(previousResult + " / 5 = " + result);
        previousResult = result;
        result = result % 3;
        System.out.println(previousResult + " % 3 = " + result);
        result++;
        System.out.println("Result is now " + result);
        result--;
        System.out.println("Result is now " + result);
        result += 2;
        System.out.println("Result is now " + result);
        result -= 1;
        System.out.println("Result is now " + result);
        result *= 10;
        System.out.println("Result is now " + result);
        result /= 5;
        System.out.println("Result is now " + result);
        // If Statements
        boolean isAlien = false;
        if (isAlien != true)
            System.out.println("It is not an alien.");

        int topScore = 80;
        if (topScore < 100)
            System.out.println("You got the top score");
        //And operator: &&
        int secTopScore = 60;
        if ((topScore > secTopScore) && (topScore < 100))
            System.out.println("Greater than second top score and less than 100");
        // Or operator: ||
        if((topScore > 90) || (secTopScore <= 90))
            System.out.println("One of these tests is true");

        int newValue = 50;
        //Must use "==" instead of "="
        if (newValue == 50)
            System.out.println("This is an error");
        boolean isCar = false;
        //Changing isCar to true in the if statement
        if (isCar == true)
            //This test will return successful
            System.out.println("This is not supposed to happen");
        boolean wasCar = isCar ? true : false;
        if (wasCar)
            //Will not be successful
            System.out.println("wasCar is true");
        //Challenge
        double chd = 20d;
        double sd = 80d;
        double res = (chd + sd)*25d;
        double remainder = res % 40;
        System.out.println(remainder);
        if (remainder <= 20)
            System.out.println("Total was over the limit");

    }
}
