"""
Comparing two algorithms for computing fibonacci numbers.
This program will list the time differences between both the functions.
"""
# Time module to time the functions
import time

# The faster fibonacci algorithm
# Helper function


def _fib(n):
    """
    Helper function to calculate fibonacci numbers
    """
    if n == 0:
        return (0, 1)
    else:
        a, b = _fib(n // 2)
        c = a * (b * 2 - a)
        d = a * a + b * b
        if n % 2 == 0:
            return (c, d)
        else:
            return (d, c + d)
# Main function


def fast_fibonacci(n):
    """
    Extremely efficient algorithm to calculate fibonacci numbers
    """
    return _fib(n)[0]
# The slower fibonacci algorithm


def medium_fibonacci(n):
    return_list = [0, 1]
    for i in range(2, n + 1):
        return_list.append(return_list[i - 1] + return_list[i - 2])
    return return_list[n]


# Testing the algorithms
n = int(input("Enter n: "))
# Timing the first algorithm
start = time.time()
answer1 = fast_fibonacci(n)
end = time.time()
duration1 = end - start
print("Fast Fibonacci Algorithm: ")
print("Duration: " + str(duration1))
print("Answer: "+str(answer1))
# Timing the second algorithm
start = time.time()
answer2 = medium_fibonacci(n)
end = time.time()
duration2 = end - start
print("Slower fibonacci algorithm: ")
print("Duration: "+str(duration2))
print("Answer is the same as above")
# End of File