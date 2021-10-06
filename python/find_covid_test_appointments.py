import requests
import time
import urllib
from playsound import playsound
from twilio.rest import Client

# Twilio details
account_sid = 'XXXX'
auth_token = 'XXXX'
client = Client(account_sid, auth_token)

counter = 0
while True:
    r = requests.get('https://nextpatient.co/p/1258/schedule-widget.js?id=1&rs=8461')
    text = r.text
    
    counter = counter + 1
    if text.find("a") != -1:
        print("No available appointments on try number {}".format(str(counter)))

    else:
        print("Available appointments!")
        playsound('/Users/qtcoyle/Downloads/SoundHelix-Song-1.mp3')
        
        message = client.messages.create(
            body = 'available appointments',
            from_ = "+16203748359",
            to = "+15304286557"
        )
        print(text)
    time.sleep(5)
