package com.hex_and_binary_sharan;

public class Hex_Letters {
    public static void main(String[] args) {
        System.out.println("Hello in hexadecimal: " + stringToHex("Hello"));
        System.out.println("48656c6c6f back to string: " + hexToString("48656c6c6f"));
    }

    public static String hexToString(String hexValue) {
        StringBuilder output = new StringBuilder("");
        for (int i = 0; i < hexValue.length(); i += 2)
        {
            String str = hexValue.substring(i, i + 2);
            output.append((char) Integer.parseInt(str, 16));
        }
        return output.toString();
    }

    public static String stringToHex(String base) {
        char[] chars = base.toCharArray();
        StringBuffer hex = new StringBuffer();
        for (int i = 0; i < chars.length; i++)
        {
            hex.append(Integer.toHexString((int) chars[i]));
        }
        return hex.toString();
    }
}
