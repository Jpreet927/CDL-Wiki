package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.model.Team;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Integer> {
//    public List<Match> findByTeam1OrTeam2OrderByDateDesc(Integer teamId);
    @Query("SELECT m FROM Match m WHERE m.team1.id = ?1 or m.team2.id = ?1 ORDER BY date DESC")
    public List<Match> findByTeam(Integer teamId);
    @Query("SELECT m FROM Match m WHERE m.team1.id = ?1 or m.team2.id = ?1 ORDER BY date DESC LIMIT 5")
    public List<Match> findFirst5ByTeam(Integer teamId);
    @Query("SELECT m FROM Match m WHERE (m.team1.id = ?1 OR m.team2.id = ?1) AND (m.team1.id = ?2 OR m.team2.id = ?2) ORDER BY date DESC")
    public List<Match> findByTeamsPlaying(Integer team1Id, Integer team2Id);
    @Query("SELECT m FROM Match m WHERE m.majorId = ?1 ORDER BY date DESC")
    public List<Match> findByMajorOrderByDateDesc(Integer majorId);

}
