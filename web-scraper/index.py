import psycopg2
import os
from dotenv import load_dotenv
from cdlTeams import scrapeTeams
from cdlPlayers import scrapePlayers
from db import *

load_dotenv()

teamsLinks = [
    'https://cod-esports.fandom.com/wiki/Atlanta_FaZe',
    'https://cod-esports.fandom.com/wiki/Boston_Breach',
    'https://cod-esports.fandom.com/wiki/Carolina_Royal_Ravens',
    'https://cod-esports.fandom.com/wiki/Las_Vegas_Legion',
    'https://cod-esports.fandom.com/wiki/Los_Angeles_Guerrillas',
    'https://cod-esports.fandom.com/wiki/Los_Angeles_Thieves',
    'https://cod-esports.fandom.com/wiki/Miami_Heretics',
    'https://cod-esports.fandom.com/wiki/Minnesota_R%C3%98KKR',
    'https://cod-esports.fandom.com/wiki/New_York_Subliners',
    'https://cod-esports.fandom.com/wiki/OpTic_Texas',
    'https://cod-esports.fandom.com/wiki/Seattle_Surge',
    'https://cod-esports.fandom.com/wiki/Toronto_Ultra'
]

# populated programatically
playerLinks = []
teamData = []
playerData = []


def scrapePages():
    # scrape all team pages
    for url in teamsLinks:
        # populates playerLinks
        teamData.append(scrapeTeams(url, playerLinks))
    print(teamData)

    # scrape all players
    for url in playerLinks:
        playerData.append(scrapePlayers(url))
    print(playerData)


def main():
    # scrape web pages
    scrapePages()

    # load environment variables
    db = os.getenv("DB_NAME")
    host = os.getenv("DB_HOST")
    user = os.getenv("DB_USER")
    password = os.getenv("DB_PASSWORD")
    port = os.getenv("DB_PORT")

    # connect to db
    conn = psycopg2.connect(database=db,
                            host=host,
                            user=user,
                            password=password,
                            port=port)

    cursor = conn.cursor()

    # create team and player tables
    createTables(cursor)

    # holds team ids to use as fk for players
    teamIds = {}

    # insert team records
    for team in teamData:
        id = insertTeamRecord(cursor, team)
        teamIds[team["name"]] = id

    # insert player records
    for player in playerData:
        player['team_id'] = teamIds[player['team_id']]
        insertPlayerRecord(cursor, player)

    # close connection
    cursor.close()

    # commit changes
    conn.commit()


main()
