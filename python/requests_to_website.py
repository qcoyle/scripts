import requests as requests
url = "" 


# Get requests
# while True:
#     r = requests.get(url)
#     print(r.status_code)


# Post to site
url = ""
counter = 0
while counter < 100:
    print("Making a request")
    r = requests.post(url, data={"email":"quinn.t.coyle@gmail.com"})
    print(r.status_code)
    print(r.text)
    counter = counter + 1
