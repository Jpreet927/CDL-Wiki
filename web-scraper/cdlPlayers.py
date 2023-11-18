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
        team = playerTable.find(
            'span', {'class': 'teamname'}).find('a').text
        playerDetails['team_id'] = validateTeam(team.lower())

        # find dob
        row = playerTable.find(
            lambda tag: tag.name == 'td' and tag.text == 'Birthday')
        playerDetails['dob'] = ' '.join(row.find_next(
            'td').text.split(' ')[0:3]) if row else '2023-01-01'

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


def validateTeam(team):
    # used to account for mismatch in team names between pages
    if "optic" in team:
        return "OpTic Texas"
    elif "subliners" in team:
        return "New York Subliners"
    elif "faze" in team:
        return "Atlanta FaZe"
    elif "breach" in team:
        return "Boston Breach"
    elif "ravens" in team:
        return "Carolina Royal Ravens"
    elif "legion" in team:
        return "Las Vegas Legion"
    elif "guerrillas" in team:
        return "Los Angeles Guerrillas"
    elif "thieves" in team:
        return "Los Angeles Thieves"
    elif "heretics" in team:
        return "Miami Heretics"
    elif "røkkr" in team:
        return "Minnesota RØKKR"
    elif "surge" in team:
        return "Seattle Surge"
    elif "ultra" in team:
        return "Toronto Ultra"
