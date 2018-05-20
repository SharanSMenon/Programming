"""
Functions that can be applied on integer lists
"""
from functools import *


def add(x, y):
    """
    Adds two numbers x and y
    :param x: number
    :param y: number
    :return: number
    """
    return x + y


def add_list(l):
    """
    Adds all the elements in a list
    :param l: list
    :return: number
    """
    return reduce(add, l)


def squareList(l):
    """
    Squares all elements in a list
    :param l:
    :return: list
    """
    return list(map(lambda x: x ** 2, l))


def simple_sort(list_: list):
    """
    Uses an simple sort algorithm to sort a list
    :param list_: list
    :return: list
    """
    return_ = []
    for i in range(len(list_)):
        smallest = reduce(min, list_)
        index = list_.index(smallest)
        return_.append(list_[index])
        list_.pop(index)
    return return_


def insertion_sort(list_: list):
    """
    Uses the insertion sort method to sort a list
    :param list_: list
    :return: list
    """
    return_list = list_.copy()
    for i in range(1, len(return_list)):
        current = return_list[i]
        position = i
        while position > 0 and return_list[position - 1] > current:
            return_list[position] = return_list[position - 1]
            position -= 1
        return_list[position] = current
    return return_list


def quick_sort(items: list):
    """
    Uses the quick sort algorithm to sort a list
    :param items: list
    :return: list
    """
    copy = items.copy()
    _sort_3w(copy, 0, len(copy) - 1)
    return copy


def _sort_3w(items, lo, hi):
    """
    Helper function for quick_sort()
    :param items:
    :param lo:
    :param hi:
    :return:
    """
    if hi <= lo:
        return
    lt = lo
    gt = hi
    pivot = items[lo]
    i = lo
    while i <= gt:
        if items[i] < pivot:
            items[lt], items[i] = items[i], items[lt]
            lt += 1
            i += 1
        elif items[i] > pivot:
            items[gt], items[i] = items[i], items[gt]
            gt -= 1
        else:
            i += 1
    _sort_3w(items, lo, lt - 1)
    _sort_3w(items, gt + 1, hi)


def binary_search(list_, key, low=0, high=0):
    """
    Uses the binary search method to search through a sorted ist
    Returns -1 if not found
    :param list_: list
    :param key: integer
    :param low: integer
    :param high: length of list_
    :return: an index i or -1
    """
    if high < low:
        return low - 1
    if high == 0:
        high = len(list_)
    mid = low + int(((high - low) / 2))
    try:
        _ = list_[mid]
    except IndexError:
        return -1
    if key == list_[mid]:
        return mid
    elif key < list_[mid]:
        return binary_search(list_, key, high=mid - 1, low=low)
    else:
        return binary_search(list_, key, low=mid + 1, high=high)


def linear_search(list_, key):
    """
    Uses the linear search method to search through a list for an index
    Returns -1 if value is not found
    Much slower than Binary search
    :param list_: list
    :param key: integer
    :return: an index or -1
    """
    for i in range(len(list_)):
        if list_[i] == key:
            return i
    return -1
