import seaborn as sns
import matplotlib.pyplot as plt
plt.style.use("ggplot")
import pandas as pd 
import numpy as np
from random import sample
tips = sns.load_dataset('tips')
# x = sample(range(1,1000),100)
# y = sample(range(1,101),100)
# dct = {'x':x,'y':y}
# data = pd.DataFrame(dct)
# print(data.head())
# sns.lmplot('x','y',data=data)
sns.lmplot('total_bill','tip',data=tips)
plt.show()
