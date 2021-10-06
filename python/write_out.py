myText = """ GO BIRDS!
"""

with open("example.txt", 'w') as f:
    f.write(myText)
    f.close

# Alternate way:
# f = open("example.txt", 'w')
# f.write(myText)
# f.close()