package com.sharan;

public class StringFunctions {
    /**
     * Constructor to make sure that class does not
     * get initialized
     */
    private StringFunctions() {
    }

    /**
     * Check is string s is palindrome
     *
     * @param s
     * @return boolean
     */
    public static boolean checkPalindrome(String s) {
        int n = s.length();
        for (int i = 0; i < (n / 2); ++i) {
            if (s.charAt(i) != s.charAt(n - i - 1)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Reverses a string s
     *
     * @param s
     * @return String
     */
    public static String reverse(String s) {
        int n = s.length();
        String return_string = "";
        for (int i = n - 1; i >= 0; i--) {
            return_string += s.charAt(i);
        }
        return return_string;
    }

    /**
     * Encrypts a string with the given cipher
     *
     * @param s
     * @param cipher
     * @return String
     */
    public static String encrypt(String s, String cipher) {
        String encrypted_word = "";
        String alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}/+-=_<>?`~:;'";
        for (int i = 0; i < s.length(); i++) {
            int index_ = alphabet.indexOf(String.valueOf(s.charAt(i)));
            encrypted_word += cipher.charAt(index_);
        }
        return encrypted_word;
    }

    /**
     * Decrypts a word with the given cipher
     *
     * @param s
     * @param cipher
     * @return
     */
    public static String decrypt(String s, String cipher) {
        String decrypted_word = "";
        String alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}/+-=_<>?`~:;'";
        for (int i = 0; i < s.length(); i++) {
            int index_ = cipher.indexOf(String.valueOf(s.charAt(i)));
            decrypted_word += alphabet.charAt(index_);
        }
        return decrypted_word;
    }

    /**
     * Main method
     *
     * @param args
     */
    public static void main(String[] args) {
        String cipher = "qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM0987654321)(*&^%$#@!][{/}-+=_<?>:;~'`";
        System.out.println("Check if 'hello world' is a palindrome: " + checkPalindrome("hello world"));
        System.out.println("Check if 'civic' is a palindrome: " + checkPalindrome("civic"));
        System.out.println("Reverse 'hello world': " + reverse("hello world"));
        System.out.println("Cipher: " + cipher);
        System.out.println("Encrypt '////Hello world*45-`&$ : " + encrypt("////Hello world*45-`&$", cipher));
        System.out.println("Decrypt '}}}}Itssg vgksr#76+:$& : " + decrypt("}}}}Itssg vgksr#76+:$&", cipher));
    }
}
