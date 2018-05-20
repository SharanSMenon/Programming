import math
feetToInches = lambda feet: feet*12
def inchesToFeet(inches):
    return inches / 12
def inchesToInchesAndFeet(inches):
    return {
        "Feet":math.floor(inches/12),
        "Inches":inches%12
    }
print(feetToInches(7))
print(inchesToFeet(156))
print(inchesToInchesAndFeet(157))