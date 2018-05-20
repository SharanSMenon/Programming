def _fib(n):
    """
    Helper function to caclulate fibonacci numbers
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
# Class
class Fibonacci():
    """Fibonacci class"""
    def __init__(self):
        print("Welcome to the Fibonacci class")
        print("You can use any of the functions here to caclulate something \nrelated to the Fibonacci numbers.")
        print("There are also basic functions like add() and divide()")

    def calc_fib(self,n):
        """
        Extremely efficient algorithm to calculate fibonacci numbers
        """
        return _fib(n)[0]
    def fibonacci_list(self, n):
        """
        Returns a list of fibonacci numbers from 1 to n \n
        Uses calc_fib() function
        """
        f = [0, 1]
        if n <= 2:
            return f[n - 1]
        for k in range(2, n+1):
            f.append(self.calc_fib(k))
        return f
    def fibonacce_modulus(self, n, m):
        """
        Returns the remainder of fibonacci(n) divided by m
        """
        fn = self.calc_fib(n)
        return fn % m
    def add(self, x, y):
        """
        Adds 2 numbers
        """
        return x + y
    def subtract(self, x, y):
        """
        Subtracts 2 numbers
        """
        return x - y
    def multiply(self, x, y):
        """
        Mulitplys 2 numbers
        """
        return x * y
    def divide(self, x, y):
        """
        Divides 2 numbers
        """
        return x / y

fib = Fibonacci()
print(fib.calc_fib(10))
print(fib.fibonacci_list(10))
