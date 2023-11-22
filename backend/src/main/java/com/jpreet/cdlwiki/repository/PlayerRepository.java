package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.Player;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PlayerRepository extends CrudRepository<Player, Integer> {
    public List<Player> getPlayerByTeamId(Integer id);
    public List<Player> getPlayerByRole(String role);
    public List<Player> getPlayerByNationality(String nationality);
}
