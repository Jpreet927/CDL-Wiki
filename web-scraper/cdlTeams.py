from bs4 import BeautifulSoup
import requests


def scrapeTeams(url, playerLinks):
    teamDetails = {}

    try:
        src = requests.get(url)
        src.raise_for_status()

        soup = BeautifulSoup(src.text, 'html.parser')

        teamDataTable = soup.find(
            'table', {'class': "infobox InfoboxTeam"}).find('tbody')
        teamDataRows = teamDataTable.find_all('tr')

        # find name
        teamDetails['name'] = teamDataRows[0].text

        # find location - 6th row in parent table
        teamDetails['location'] = teamDataRows[6].find(
            'span', {'class': 'sprite country-sprite'}).find_next('span').text

        # find affiliated
        affiliatedRow = teamDataTable.find(
            lambda tag: tag.name == "td" and "Affiliated" in tag.text)
        # team may not have affiliated data, in which case N/A is returned
        teamDetails['affiliated'] = affiliatedRow.find_next('td').find(
            'a', {'class': 'to_hasTooltip'}).text if affiliatedRow else "N/A"

        # find head coach
        coachRow = teamDataTable.find(
            lambda tag: tag.name == "td" and "Head Coach" in tag.text)
        # team may not have affiliated data, in which case N/A is returned
        teamDetails['coach'] = coachRow.find_next(
            'td').text if coachRow else "N/A"

        # find owner
        ownerRow = teamDataTable.find(
            lambda tag: tag.name == "td" and "Owner" in tag.text)
        # team may not have affiliated data, in which case N/A is returned
        teamDetails['owner'] = ownerRow.find_next(
            'td').text if ownerRow else "N/A"

        # find created date
        teamDetails['created'] = teamDataTable.find(
            'th', {'class': 'teamdate'}).find_next('td').text

        # add player urls to playerLinks array
        playerTableRows = soup.find(
            'table', {'class': "team-members"}).find('tbody').find_all('tr')

        for row in playerTableRows:
            linkTag = row.find('a')
            if linkTag:
                playerLinks.append(
                    'https://cod-esports.fandom.com' + linkTag['href'])

    except Exception as e:
        print(e)

    return teamDetails
