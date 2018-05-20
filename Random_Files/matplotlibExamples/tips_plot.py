# Importing needed modules
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
# Loading tips
tips = sns.load_dataset('tips')
# Creating new column tip_pect
tips['tip_pect'] = 100*(tips['tip']/tips['total_bill'])
# Setting style
plt.style.use('ggplot')
# Creating 4 plots
fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(16, 12))
# Graph 1
ax1.hist(tips['sex'], bins=2, edgecolor='black')
ax1.set_xlabel('Gender')
ax1.set_ylabel('# of people')
ax1.set_title("People of each gender")
# Graph 2
ax2.set_title("Regression plot of Tips ")
sns.regplot('total_bill', 'tip_pect', tips, ax=ax2)
# Graph 3
sns.violinplot(x='day', y='tip_pect', data=tips, ax=ax3, orient='vertical')
# Graph 4
sns.boxplot(x='day', y='tip_pect', data=tips, ax=ax4, orient='vertical')
fig.suptitle("Plots of tips")
plt.show()