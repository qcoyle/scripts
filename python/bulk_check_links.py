import requests
import pandas as pd

accessPath = "/Users/qtcoyle/Downloads"
data = pd.read_csv(accessPath + '/data.csv')
list = data.values.tolist()

for i in list:
    url = i[0] # Modify if url in different column
    r = requests.get(url)
    print("{}, status {}".format(url,r.status_code))