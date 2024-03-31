def createTables(cursor):
    cursor.execute("DROP TABLE player CASCADE;")
    cursor.execute("DROP TABLE team CASCADE;")

    createTeamTableQuery = """
        CREATE TABLE IF NOT EXISTS team (
            id          INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name        VARCHAR(100),
            location    VARCHAR(50),
            created     DATE,
            affiliated  VARCHAR(50),
            coach       VARCHAR(100),
            owner       VARCHAR(100),
            points      INTEGER,
            ticker      VARCHAR(4),
            logo_dark   VARCHAR(255),
            logo_light  VARCHAR(255)
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
            headshot    VARCHAR(255),
            FOREIGN KEY (team_id) REFERENCES team (id)
        )
    """

    cursor.execute(createTeamTableQuery)
    cursor.execute(createPlayerTableQuery)


def insertTeamRecord(cursor, team):
    keys = list(team.keys())
    values = list(team.values())

    query = ("""INSERT INTO team({}) VALUES({{}}) RETURNING id"""
             .format(','.join(x for x in keys))
             .format(','.join('%s' for _ in values)))
    cursor.execute(query, values)
    id = cursor.fetchone()[0]

    return id


def insertPlayerRecord(cursor, player):
    keys = list(player.keys())
    values = list(player.values())

    query = ("""INSERT INTO player({}) VALUES({{}})"""
             .format(','.join(x for x in keys))
             .format(','.join('%s' for _ in values)))
    cursor.execute(query, values)


def insertMultipleTeamRecords(cursor, teams):
    pass


def insertMultiplePlayerRecords(cursor, players):
    pass
