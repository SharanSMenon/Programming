import csv
from multiprocessing import forkserver

import pandas
from urllib.request import urlopen
import json


def get_place(lat, lon):
    url = "http://maps.googleapis.com/maps/api/geocode/json?"
    url += "latlng=%s,%s&sensor=false" % (lat, lon)
    v = urlopen(url).read()
    j = json.loads(v)
    try:
        components = j['results'][0]['address_components']
    except Exception as e:
        return None
    country = town = None
    for c in components:
        if "country" in c['types']:
            country = c['long_name']
        if "postal_town" in c['types']:
            town = c['long_name']
    return country


df = pandas.read_csv("database.csv");
rw = df.iloc[0]
countries = []
for i in range(0, len(df) - 2):
    row = list(df.iloc[0])
    # print(i)
    if len(row) >= 2:
        country = get_place(row[0], row[1])
        countries.append(country)
df["Country"] = countries
print(df.head())