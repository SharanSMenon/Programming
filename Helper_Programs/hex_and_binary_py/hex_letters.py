def string_to_hex(string):
    string = string.encode('utf-8')
    return string.hex()


def hex_to_string(hex_code):
    return bytes.fromhex(hex_code).decode('utf-8')


if __name__ == '__main__':
    print("1. Convert text into hexadecimal code")
    print("2. Convert hexadecimal code to text")
    print("Type 1 or 2.")
    ch = input("Choose: ")
    if ch == "1":
        ip = input("Enter your string: ")
        print("Result: " + str(string_to_hex(ip)))
    elif ch == "2":
        ip2 = input("Enter your hexadecimal string: ")
        print("Result: " + str(hex_to_string(ip2)))
    else:
        print("Not a valid option")
        quit()
