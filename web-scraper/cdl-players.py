from bs4 import BeautifulSoup
import requests

try:
    src = requests.get('https://cod-esports.fandom.com/wiki/Dashy')
    # invalid url
    src.raise_for_status()

    soup = BeautifulSoup(src.text, 'html.parser')
    print(soup)

except Exception as e:
    print(e)