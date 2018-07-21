def triangular_normal(n):
    return (n*n + n)/2


def pyramidal_normal(n):
    return (n*(n + 1)*(n + 2))/6


def triangular_recursive(n):
    if n == 1:
        return 1
    return n + + triangular_recursive(n - 1)


def pyramidal_recursive(n):
    if n == 1:
        return 1
    return pyramidal_recursive(n - 1) + triangular_recursive(n)


print(triangular_normal(4))
print(pyramidal_normal(10))
print(triangular_recursive(4))
print(pyramidal_recursive(10))
