"""
Functions that can be applied on strings.
"""
from functools import reduce
import operator


def check_palindrome(x):
    """
    Checks if a string is a palindrome
    :param x:
    :return: True or False
    """
    if x[::-1] == x:
        return True
    return False


def reverse(s):
    """
    Reverses a string
    :param s:
    :return: Reverse of s
    """
    return s[::-1]


def find_most_common_character(s):
    """
    Finds most common character in string s
    :param s:
    :return: character
    """
    letters = {i: 0 for i in s}
    for i in s:
        letters[i] += 1
    return max(letters.items(), key=operator.itemgetter(1))[0]


def encrypt(s, cipher):
    """
    Encrpyts the word with the given cipher
    :param s:
    :param cipher:
    :return: sting
    """
    encrpyted_word = ""
    alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}/+-=_<>?`~:;'"
    for i in s:
        index_ = alphabet.find(i)
        encrpyted_word += cipher[index_]
    return encrpyted_word


def decrypt(s, cipher):
    """
    Decrypts a word with the given cipher
    :param s:
    :param cipher:
    :return: string
    """
    decrpyted_word = ""
    alphabet = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()[]{}/+-=_<>?`~:;'"
    for i in s:
        index_ = cipher.find(i)
        decrpyted_word += alphabet[index_]
    return decrpyted_word
