import pandas as pd
import random
x = random.sample(range(100),100)
y = random.sample(range(100),100)
df = pd.DataFrame({"x":x,"y":y})
df.to_csv("data2.csv")