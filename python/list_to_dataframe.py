import pandas as pd

list = [['Anton Yelchin', 36, 75.2, 54280.20],  
        ['Yul Brynner', 38, 74.32, 34280.30],  
        ['Lev Gorn', 31, 70.56, 84280.50], 
        ['Alexander Godunov', 34, 80.30, 44280.80],  
        ['Oleg Taktarov', 40, 100.03, 45280.30], 
        ['Dmitriy Pevtsov', 33, 72.99, 70280.25],  
        ['Alexander Petrov', 42, 85.84, 25280.75]] 
df = pd.DataFrame(list, columns =['Name', 'Age', 'Weight', 'Salary']) 
print(df)