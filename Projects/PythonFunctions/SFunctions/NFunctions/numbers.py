"""
Functions that can be applied on numbers
"""
import math


def is_prime(x):
    """
    Checks if x is prime
    :param x:
    :return: True or False
    """
    for i in range(2, x // 2):
        if x % i == 0:
            return False
    return True


def is_even(x):
    """
    Checks if number is even
    :param x:
    :return:
    """
    return x % 2 == 0


def is_odd(x):
    """
    Checks if number is odd
    :param x:
    :return:
    """
    return x % 2 == 1


def squared(x):
    """
    Squares x
    :param x:
    :return: x**2
    """
    return x ** 2


def subtract(x, y):
    """
    Subtracts two numbers
    :param x:
    :param y:
    :return:
    """
    return x - y


def multipliy(x, y):
    """
    Multiplies two numbers
    :param x:
    :param y:
    :return:
    """
    return x * y


def divide(x, y):
    """
    Divides two numbers.
    :param x:
    :param y:
    :return:
    """
    return x / y


def circle_of_numbers(n, firstNumber):
    """
    Circle of numbers challenge from CodeFights.
    :param n:
    :param firstNumber:
    :return:
    """
    if firstNumber >= n // 2:
        return firstNumber - (n // 2)
    else:
        return firstNumber + (n // 2)


def perimeter_of_rectangle(s1, s2):
    """
    Finds perimeter of rectangle given length and width
    :param s1:
    :param s2:
    :return:
    """
    return s1 * 2 + s2 * 2


def perimeter_of_square(s):
    """
    Finds perimeter of square given side s
    :param s:
    :return:
    """
    return s * 4


def area_of_square(s):
    """
    Finds area of a square given side s
    :param s:
    :return:
    """
    return s ** 2


def area_of_rectangle(s1, s2): return s1 * s2


def circumference(radius=0, diameter=0):
    """
    Finds circumference of circles
    :param radius:
    :param diameter:
    :return:
    """
    if diameter > 0:
        return diameter * math.pi
    elif radius > 0:
        return (2 * radius) * math.pi


def area_of_circle(radius=0, diameter=0):
    """
    Finds the area of a circle
    :param radius: int
    :param diameter: int
    :return: (pi)r**2
    """
    if diameter > 0:
        return math.pi * ((diameter / 2) ** 2)
    elif radius > 1:
        return math.pi * (radius ** 2)


def pythagorean_theorem(a, b):
    """
    Uses the Pythagorean Theorem
    :param a:
    :param b:
    :return:
    """
    return math.sqrt(a ** 2 + b ** 2)


def law_of_cosines_normal(a, b, C):
    """
    Uses law of cosines to find length of side c
    :param a:
    :param b:
    :param C:
    :return:
    """
    return math.sqrt(a ** 2 + b ** 2 - (2 * a * b * (math.cos(math.radians(C)))))


def law_of_cosines_gamma(a, b, c):
    """
    Calcutes gamma using law of cosines
    Should be 82.81 for a = 5, b = 4 and c = 6
    :param a:
    :param b:
    :param c:
    :return: C
    """
    return math.degrees(math.acos(((a ** 2 + b ** 2 - c ** 2) / (2 * a * b))))


def _fib(n):
    """
    Helper function to calculate fibonacci numbers
    :param n:
    :return: tuple
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


def fib(n):
    """
    Extremely efficient algorithm to calculate fibonacci numbers
    :param n:
    :return: nth fibonacci number
    """
    return _fib(n)[0]
def gcd(a, b):
    """
    An efficient algorithm to compute GCD
    :param a:
    :param b:
    :return: gcd of a and b
    """
    if b == 0:
        return a
    ap = a % b
    return gcd(b, ap)


def lcm(a, b):
    """
    An efficient algorithm to calculate LCM \n
    This algorithm works efficiently.
    :param a:
    :param b:
    :return: lcm of a, b
    """
    return a * b // gcd(a, b)
