package com.hex_and_binary_sharan;

public class Binary_Letters {
    public static void main(String[] args) {
        System.out.println(stringToBinary("Hello!"));
        System.out.println("010010000110010101101100011011000110111100100001 in string: " + binaryToString("010010000110010101101100011011000110111100100001"));
    }

    public static String stringToBinary(String text) {
        StringBuilder sb = new StringBuilder();

        for (char character : text.toCharArray()) {
            sb.append(Integer.toBinaryString(character) + "\n");
        }

        return sb.toString();
    }

    public static String binaryToString(String code) {
        String s2 = "";
        char nextChar;

        for (int i = 0; i <= code.length() - 8; i += 8) {
            nextChar = (char) Integer.parseInt(code.substring(i, i + 8), 2);
            s2 += nextChar;
        }
        return s2;
    }
}

