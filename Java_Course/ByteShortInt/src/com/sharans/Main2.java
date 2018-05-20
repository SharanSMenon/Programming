package com.sharans;

public class Main2 {
    public static void main(String[] args) {
        //Floats and Doubles
        int myInt = 5;
        System.out.println(myInt);
        float myFloat = 3.14159265352345f;
        System.out.println(myFloat);
        double myDoubleValue = 3.141_592_653_523_452_345;
        System.out.println(myDoubleValue);
        /*Float - 32 bits, same as integer
        Double - 64 bits, same as longs
        Use doubles more than floats
        Doubles has more units of precision.
        Doubles are also faster in modern computers.
        */
        double divd = 5d / 2d;
        float fdivd = 5f / 2f;
        int idivd = 5 / 2;
        System.out.println("5/2 as a double: " + divd);
        System.out.println("5/2 as a float: " + fdivd);
        System.out.println("5/2 as an int: " + idivd);
        double pounds = 200d;
        double kp = pounds * 0.45359d;
        System.out.println(pounds + " pounds to kilograms: " + kp);
        //90.718

    }
}
