try:
    print(variable)
    print(10/0) # Note - this does not ever execute because of the above exception
except NameError:
    print("Variable is not defined. But at least the program doesn't terminate")
except ZeroDivisionError:
    print("you cannot divide by 0")
else:
    print("I'll only run if there's no errors in the try block") 
finally:
    print("I will execute regardless of whether try block returns an error")

print("Hey, I still get to run!")