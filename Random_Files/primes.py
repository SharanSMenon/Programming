def checkPrimes(n):
    for k in range(2 , int(n / 2)):
        if n % k == 0:
            return False
    return True
def primes(lst):
    prime = []
    for i in range(0,len(lst)):
        if checkPrimes(lst[i]):
            prime.append(lst[i])
    return prime
l = [i for i in range(0,100)]
print("Welcome to primes")
print("Option 1: Check if a number is prime")
print("Option 2: Find primes in a list from 1 to n")
choice = input("Type in 1 or 2: ")
choice.replace(" ","")
if choice == "1":
    num = input("Which number do you want to check? ")
    print(checkPrimes(int(num)))
else:
    mx = int(input("What is the maximum number? "))
    print(primes([i for i in range(2,mx)]))
print("Thank you for visiting today")
