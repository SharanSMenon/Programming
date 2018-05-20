package com.sharans;
public class Main {
    public static void main(String[] args) {
        // Underscores makes large numbers readable.
        //Integer - 32 bits
        int myMinValue = -2147483648;
        int myMaxValue = 2_147_483_647;
        int myIntT = (myMaxValue/2);
        System.out.println("My Integer Total: " + myIntT);
        //Byte - 8 bits
        byte myByte = 127;
        byte myBytet = (byte) (myByte/2);
        System.out.println("My Byte Total: " + myBytet);
        //Short - 16 bits
        short myShort = 32767;
        short myShortt = (short) (myShort/2);
        System.out.println("My Short Total: "+myShortt);
        //Long - 64 bit
        long myLong = 9_223_372_036_854_775_807L;
        long myLongt = (myLong/2L);
        System.out.println("My Long Total: "+myLongt);
        //Arithmetic with different datatypes
    }
}
