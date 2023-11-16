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


def insertTeamRecord(cursor, team):
    pass


def insertPlayerRecord(cursor, player):
    pass


def insertMultipleTeamRecords(cursor, teams):
    pass


def insertMultiplePlayerRecords(cursor, players):
    pass
