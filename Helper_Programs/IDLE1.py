"""
Sorting algorithm implemented
User gets to pick options
"""
from functools import reduce
import random


def sort(list_):
    copy_ = list_.copy()
    final = []
    for i in range(0, len(copy_)):
        minimum = reduce(min, copy_)
        final.append(minimum)
        copy_.remove(minimum)
    return final

    
def main():
    print("Type 'random' to pick random values")
    print("Otherwise, type your numbers seperated by spaces")
    input_ = input("Enter your numbers: ")
    if input_.lower() == "random":
        input2 = int(input("Enter length of list: "))
        input3 = int(input("Enter the maximum value: "))
        list_ = random.sample(range(input3), input2)
    else:
        list_ = list(map(lambda n: int(n), list(input_.split())))
    print("Original list: " + str(list_))
    print("New sorted list: " + str(sort(list_)))

    
if __name__ == '__main__':
    main()
