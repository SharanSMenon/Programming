import matplotlib.pyplot as plt
from sklearn.datasets import make_moons
from sklearn.cluster import DBSCAN
# %matplotlib inline
plt.style.use('ggplot')
X,label = make_moons(n_samples=200,noise=0.1,random_state=19)
model = DBSCAN(eps=0.25,min_samples=12).fit(X)
plt.scatter(X[:, 0],X[:, 1],c=model.labels_,s=140,cmap=plt.cm.Set2)
plt.show()