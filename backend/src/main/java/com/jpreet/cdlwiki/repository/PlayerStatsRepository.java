package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.PlayerStats;
import org.springframework.data.repository.CrudRepository;

public interface PlayerStatsRepository extends CrudRepository<PlayerStats, Integer> {
}
