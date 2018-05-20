import pandas as pd
from matplotlib import pyplot as plt
csv = open('HardestSubjects.csv','r')
df = pd.DataFrame(pd.read_csv(csv))
subjects = list(df[df.columns[0]])
numbers = list(df[df.columns[1]])
plt.pie(numbers,autopct="%0.2f%%",labels=subjects)
plt.axis("equal")
plt.savefig("HardestPie.png")
plt.show()
