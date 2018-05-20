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
print(lcm(2203,123))
