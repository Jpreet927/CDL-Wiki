from bs4 import BeautifulSoup
import requests


def scrapePlayers(url):
    playerDetails = {}

    try:
        src = requests.get(url)

        # invalid url
        src.raise_for_status()

        soup = BeautifulSoup(src.text, 'html.parser')

        # find alias
        playerTable = soup.find(
            'table', {'class': 'infobox-player-narrow'}).find('tbody')
        playerTableRows = playerTable.find_all('tr')
        playerDetails['alias'] = playerTableRows[0].find('th').text

        # find name
        row = playerTable.find(
            lambda tag: tag.name == 'td' and tag.text == 'Name')
        playerDetails['name'] = row.find_next(
            'td').text if row else 'N/A'

        # find team - some players are currently not on a team which will throw an exception
        playerDetails['team'] = playerTable.find(
            'span', {'class': 'teamname'}).find('a').text

        # find dob
        row = playerTable.find(
            lambda tag: tag.name == 'td' and tag.text == 'Birthday')
        playerDetails['dob'] = ' '.join(row.find_next(
            'td').text.split(' ')[0:3]) if row else 'N/A'

        # find nationality
        playerDetails['nationality'] = playerTable.find(
            'span', {'class': 'country-sprite'}).find_next('span').text

        # find role
        row = playerTable.find(
            lambda tag: tag.name == 'td' and tag.text == 'Role')
        playerDetails['role'] = row.find_next(
            'td').find('span').find('span').text if row else 'N/A'

    except Exception as e:
        print(e)
        return

    return playerDetails
