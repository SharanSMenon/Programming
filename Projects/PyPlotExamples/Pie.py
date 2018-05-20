import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("data.csv")
elementAbundance = list(data["Element abundance"])
elementName = list(data["Element Name"])
plt.pie(elementAbundance, autopct="%0.5f%%", labels=elementName)
plt.axis("equal")
plt.show()
