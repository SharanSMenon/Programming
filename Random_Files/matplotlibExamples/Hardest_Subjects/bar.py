import pandas as pd
from matplotlib import pyplot as plt
csv = open('HardestSubjects.csv', 'r')
df = pd.DataFrame(pd.read_csv(csv))
subjects = list(df[df.columns[0]])
numbers = list(df[df.columns[1]])
ax = plt.subplot()
plt.bar(range(len(numbers)),numbers)
ax.set_xticks(range(len(numbers)))
ax.set_xticklabels(subjects)
# plt.savefig("HardestBar.png")
plt.show()