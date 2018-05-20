import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("data.csv")
elementAbundance = list(data["Element abundance"])
elementName = list(data["Element Name"])
axis = plt.subplot()
plt.bar(range(len(elementAbundance)), elementAbundance)
axis.set_xticks(range(len(elementAbundance)))
axis.set_xticklabels(elementName)
plt.show()
