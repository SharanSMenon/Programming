package com.sharans;

public class Main3 {
    public static void main(String[] args) {
        //Char and Booleans
        //Char, can only have 1 character
        char myChar = '\u00A9';
        System.out.println(myChar);
        //Boolean - true or false
        boolean myBoolean = true;
        System.out.println(myBoolean);
        //String
        String myStr = "This is a string";
        System.out.println(myStr);
        myStr = myStr + ". This is more text";
        System.out.println(myStr);
        //Example
        String lastString = "10";
        int myInt = 50;
        lastString = lastString + myInt;
        System.out.println(lastString);

    }
}
