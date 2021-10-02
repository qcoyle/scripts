string = """Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract."""

split_strings = []
n  = 100 # Split every n character

# Split string every nth character
for i in range(0, len(string), n):
    split_strings.append(string[i : i + n])

print(split_strings)

# Split string every nth character, only on words
split_strings = []
while n < len(string):
    i = n

    while string[i] != " ":
        i = i - 1

    split_strings.append(string[0 : i])
    string = string[i+1: len(string)] # Get rid of trailing space for next line

print(split_strings)