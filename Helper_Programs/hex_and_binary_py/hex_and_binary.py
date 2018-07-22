from binaryLetters import *
from hex_letters import *


def hex_to_binary(hexString):
    return text_to_binary(hex_to_string(hexString))


def binary_to_hex(binaryString):
    return string_to_hex(binary_to_text(binaryString))


if __name__ == '__main__':
    print("1. Convert binary code into hexadecimal code")
    print("2. Convert hexadecimal code to binary code")
    print("Type 1 or 2.")
    ch = input("Choose: ")
    if ch == "1":
        ip = input("Enter your string: ")
        print("Result: " + str(binary_to_hex(ip)))
    elif ch == "2":
        ip2 = input("Enter your hexadecimal string: ")
        print("Result: " + str(hex_to_binary(ip2)))
    else:
        print("Not a valid option")
        quit()
