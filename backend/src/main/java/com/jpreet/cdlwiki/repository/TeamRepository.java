package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.Team;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TeamRepository extends CrudRepository<Team, Integer> {
    public List<Team> getAllTeamsByOrderByNameAsc();
    public List<Team> getAllTeamsByOrderByPointsDesc();
}
