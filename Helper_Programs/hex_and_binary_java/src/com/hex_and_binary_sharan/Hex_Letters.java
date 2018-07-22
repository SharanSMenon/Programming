package com.hex_and_binary_sharan;

public class Hex_Letters {
    public static void main(String[] args) {
        System.out.println("Hello in hexa: " );
    }

    public static String hexToString(String text) {
        String str = "";
        for (int i = 0; i < text.length(); i += 2) {
            String s = text.substring(i, (i + 2));
            int decimal = Integer.parseInt(s, 16);
            str = str + (char) decimal;
        }
        return str;
    }

    public static String stringToHex(String hexCode) {
        return Integer.toHexString(Integer.parseInt(hexCode));
    }
}
