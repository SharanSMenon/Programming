# Implementing decision trees for sasint
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import pandas as pd

training = open("training.txt").readlines()
testing = open("testing.txt").readlines()
print(print(training[1]))
dtree = DecisionTreeClassifier()
# Hello worldjn