"""
Graphing some data
"""
import matplotlib.pyplot as plt
import random

if __name__ == '__main__':    
    x = random.sample(range(100),100)
    y = random.sample(range(100),100)
    plt.scatter(x, y)
    plt.xlabel("X")
    plt.ylabel("Y")
    plt.title("Scatterplot of random data")
    plt.show()
