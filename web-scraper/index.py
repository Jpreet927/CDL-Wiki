from cdlTeams import scrapeTeams
from cdlPlayers import scrapePlayers

teamsLinks = [
    'https://cod-esports.fandom.com/wiki/Atlanta_FaZe',
    'https://cod-esports.fandom.com/wiki/OpTic_Texas',
    'https://cod-esports.fandom.com/wiki/Boston_Breach',
    'https://cod-esports.fandom.com/wiki/Carolina_Royal_Ravens',
    'https://cod-esports.fandom.com/wiki/Las_Vegas_Legion',
    'https://cod-esports.fandom.com/wiki/Los_Angeles_Guerrillas',
    'https://cod-esports.fandom.com/wiki/Los_Angeles_Thieves',
    'https://cod-esports.fandom.com/wiki/Miami_Heretics',
    'https://cod-esports.fandom.com/wiki/Minnesota_R%C3%98KKR',
    'https://cod-esports.fandom.com/wiki/New_York_Subliners',
    'https://cod-esports.fandom.com/wiki/Seattle_Surge',
    'https://cod-esports.fandom.com/wiki/Toronto_Ultra'
]

# populated programatically 
playerLinks = []

# scrape all team pages
for url in teamsLinks:
    # populates playerLinks
    scrapeTeams(url, playerLinks) 

# scrape all players
# for url in playerLinks:
#     scrapePlayers(url)
