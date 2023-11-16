import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()


def createTables(cursor):
    createTeamTableQuery = """
        CREATE TABLE IF NOT EXISTS team (
            id         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name       VARCHAR(100),
            location   VARCHAR(50),
            created    VARCHAR(50),
            affiliated VARCHAR(50),
            points     INTEGER
        )
    """

    createPlayerTableQuery = """
        CREATE TABLE IF NOT EXISTS player (
            id          INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            alias       VARCHAR(50),
            name        VARCHAR(50),
            team_id     INTEGER,
            dob         DATE,
            nationality VARCHAR(50),
            role        VARCHAR(50),
            image       VARCHAR(255),
            FOREIGN KEY (team_id) REFERENCES team (id)
        )
    """

    cursor.execute(createTeamTableQuery)
    cursor.execute(createPlayerTableQuery)


def insertTeamRecord(team):
    pass


def insertPlayerRecord(player):
    pass


def insertMultipleTeamRecords(teams):
    pass


def insertMultiplePlayerRecords(players):
    pass


def main():
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

    # close connection
    cursor.close()

    # commit changes
    conn.commit()


main()
