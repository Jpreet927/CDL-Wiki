package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.Player;
import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository extends CrudRepository<Player, Integer> {
}
