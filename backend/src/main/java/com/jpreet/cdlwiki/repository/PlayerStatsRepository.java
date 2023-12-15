package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.PlayerStats;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlayerStatsRepository extends CrudRepository<PlayerStats, Integer> {
    public List<PlayerStats> findByPlayerId(Integer playerId);
    public List<PlayerStats> findByMatchId(Integer matchId);
}
