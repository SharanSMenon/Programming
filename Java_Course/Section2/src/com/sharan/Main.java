package com.sharan;

public class Main {
    public static void main(String[] args) {
	    //Switch Statements
        int switchV = 6;
        switch (switchV) {
            case 1:
                System.out.println("Value was 1");
                break;
            case 2:
                System.out.println("Value was 2");
                break;
            case 3: case 4: case 5:
                System.out.println("It was "+switchV);
                break;
            default:
                System.out.println("Not 1, 2, 3, 4, or 5");
                break;
        }
        char charValue = 'f';
        switch(charValue) {
            case 'a':
                System.out.println("Was a");
                break;
            case 'b':
                System.out.println("Was b");
                break;
            case 'c': case 'd': case 'e':
                System.out.println("Was not a, or b");
                System.out.println("It was "+charValue);
                break;
            default:
                System.out.println("Was not one of the 5 accepted values.");
                break;
        }
        String month = "JULy";
        switch (month.toLowerCase()){
            case "january":
                System.out.println("January");
                break;
            case "july":
                System.out.println("July");
                break;
            default:
                System.out.println("Did you write something?");
                break;
        }
    }
    // END NOTES:
    // Computers are very precise
    // Switch can be used with byte, short, int, char, and String
    // Have to change project settings
}
