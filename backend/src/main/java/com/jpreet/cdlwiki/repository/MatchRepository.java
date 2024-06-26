package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.enums.RoundName;
import com.jpreet.cdlwiki.model.Match;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Integer> {
    @Query("SELECT m FROM Match m WHERE (m.team1.id = ?1 or m.team2.id = ?1) AND (m.date >= ?2) ORDER BY date ASC")
    public List<Match> findByTeamAfterDate(Integer teamId, Date date);

    @Query("SELECT m FROM Match m WHERE (m.team1.id = ?1 or m.team2.id = ?1) AND (m.date <= ?2) ORDER BY date DESC")
    public List<Match> findByTeamBeforeDate(Integer teamId, Date date);

    @Query("SELECT m FROM Match m WHERE (m.team1.id = ?1 OR m.team2.id = ?1) AND (m.date >= ?2) ORDER BY date ASC LIMIT 5")
    public List<Match> findNext5ByTeam(Integer teamId, Date date);

    @Query("SELECT m FROM Match m WHERE (m.team1.id = ?1 OR m.team2.id = ?1) AND (m.date <= ?2) ORDER BY date DESC LIMIT 5")
    public List<Match> findPrevious5ByTeam(Integer teamId, Date date);

    @Query("SELECT m FROM Match m WHERE (m.team1.id = ?1 OR m.team2.id = ?1) AND (m.team1.id = ?2 OR m.team2.id = ?2) ORDER BY date DESC")
    public List<Match> findByTeamsPlaying(Integer team1Id, Integer team2Id);

    @Query("SELECT m FROM Match m WHERE m.majorId = ?1 ORDER BY date ASC")
    public List<Match> findByMajor(Integer majorId);
    @Query("SELECT m FROM Match m WHERE m.majorId = ?1 AND m.round <> com.jpreet.cdlwiki.enums.RoundName.QUALIFIERS ORDER BY date ASC")
    public List<Match> findByMajorTournament(Integer majorId);

    @Query("SELECT m FROM Match m WHERE m.majorId = ?1 AND m.date >= ?2 ORDER BY date ASC")
    public List<Match> findByMajorAfterDate(Integer majorId, Date date);

    @Query("SELECT m FROM Match m WHERE m.majorId = ?1 AND m.date <= ?2 ORDER BY date DESC")
    public List<Match> findByMajorBeforeDate(Integer majorId, Date date);

    @Query("SELECT m FROM Match m WHERE m.round = ?1 ORDER BY date DESC")
    public List<Match> findByRound(RoundName round);

    @Query("SELECT m FROM Match m WHERE m.majorId = ?1 AND m.round = ?2 ORDER BY date DESC")
    public List<Match> findByMajorAndRound(Integer majorId, RoundName round);

    @Query("SELECT m FROM Match m WHERE m.date >= ?1 ORDER BY date ASC")
    public List<Match> findAllMatchesAfterDate(Date date);

    @Query("SELECT m FROM Match m WHERE m.date <= ?1 ORDER BY date DESC")
    public List<Match> findAllMatchesBeforeDate(Date date);

    @Query("SELECT m FROM Match m WHERE m.date >= ?1 ORDER BY date ASC")
    public Page<Match> findAllMatchesAfterDatePaginated(Pageable pageable, Date date);

    @Query("SELECT m FROM Match m WHERE m.date <= ?1 ORDER BY date DESC")
    public Page<Match> findAllMatchesBeforeDatePaginated(Pageable pageable, Date date);

    @Query("SELECT m FROM Match m WHERE m.majorId = :majorId AND m.date >= :date ORDER BY date ASC")
    public Page<Match> findByMajorAfterDatePaginated(Pageable pageable, @Param("majorId") Integer majorId, @Param("date") Date date);

    @Query("SELECT m FROM Match m WHERE m.majorId = :majorId AND m.date <= :date ORDER BY date DESC")
    public Page<Match> findByMajorBeforeDatePaginated(Pageable pageable, @Param("majorId") Integer majorId, @Param("date") Date date);

    @Query("SELECT m FROM Match m WHERE (m.team1.id = :teamId OR m.team2.id = :teamId) AND (m.date >= :date) ORDER BY date ASC")
    public Page<Match> findByTeamAfterDatePaginated(Pageable pageable, @Param("teamId") Integer majorId, @Param("date") Date date);

    @Query("SELECT m FROM Match m WHERE (m.team1.id = :teamId OR m.team2.id = :teamId) AND (m.date <= :date) ORDER BY date DESC")
    public Page<Match> findByTeamBeforeDatePaginated(Pageable pageable, @Param("teamId") Integer teamId, @Param("date") Date date);
}
