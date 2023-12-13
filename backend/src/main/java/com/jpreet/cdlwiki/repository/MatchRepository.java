package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.model.Team;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Integer> {
    public List<Match> findByTeam1OrTeam2OrderByDateDesc(Integer teamId);
    public List<Match> findFirst5ByTeam1OrTeam2OrderByDateDesc(Integer teamId);
    public List<Match> findByMajorOrderByDateDesc(Integer majorId);

}
