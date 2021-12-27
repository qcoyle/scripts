file_path = "/Users/qtcoyle/Downloads"
csvfile = open(file_path + '/data.csv', 'r').readlines()
filename = 1
for i in range(len(csvfile)):
    if i % 1000 == 0:
        open(file_path + "/" + str(filename) + '.csv', 'w+').writelines(csvfile[i:i+1000])
        filename += 1