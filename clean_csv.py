# Clean up a messy CSV file using pandas: remove empty rows, rename columns

import pandas as pd
path = '/Users/qtcoyle/Downloads'

data = pd.read_csv(path + '/data.csv') #, converters={'postal_code': lambda x: str(x)}) # Lambda to keep leading 0's on postal code

# Get rid of trailing .0
data = data.astype(str)
data = data.replace(to_replace = "\.0+$",value = "", regex = True)

# Modify
dataClean = data[["Old Column 1","Old Column 2"]]
dataClean = dataClean.rename(columns={"Old Column 1":"New Column 1", "Old Column 2":"New Column 2"})
dataClean = dataClean.dropna(axis=0)
dataClean = dataClean.reset_index(drop=True)
dataClean = dataClean.round(decimals=0).astype(object) # Get rid of trailing .0

# Export
dataClean.to_csv(path+'/newData.csv', sep=',',index=False)