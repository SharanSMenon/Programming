import seaborn as sns
import pandas as pd
df = sns.load_dataset("flights")
df.to_csv("data.csv")