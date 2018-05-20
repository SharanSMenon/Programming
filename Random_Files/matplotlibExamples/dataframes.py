import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import math
import pandas as pd
import random
rdn = [random.sample(range(0, 100), 10) for i in range(10)]
df4 = pd.DataFrame(rdn)
fig, (axis1, axis2) = plt.subplots(1, 2, figsize=(16, 6))
sns.heatmap(df4, ax=axis1, annot=True, fmt='d')
axis2.plot(df4)
axis1.set_title("Heatmap of Df4")
axis2.set_title("Plot of df4")
fig.suptitle("DF4 plots")
axis2.legend([1, 2, 3, 4, 5, 6, 7, 8, 9])
plt.show()
