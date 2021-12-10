import requests

from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

def getRequest(url):
    s = requests.Session()
    retries = Retry(total=5, backoff_factor=1, status_forcelist=[ 429, 502, 503, 504 ])
    s.mount("https://", HTTPAdapter(max_retries=retries))
    r = s.get(url)
    print(r.status_code)
    
    return r

getRequest("https://google.com") # 200
getRequest("https://afghkjhgaklsghjkdsahgksahsalkg.com") # Error after time