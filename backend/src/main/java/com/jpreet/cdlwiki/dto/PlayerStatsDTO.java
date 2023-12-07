package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.model.Player;
import com.jpreet.cdlwiki.model.PlayerStats;
import jakarta.persistence.*;

public class PlayerStatsDTO {
    private Integer id;
    private Player player;
    private Match match;
    private Integer kills;
    private Integer deaths;
    private Integer assists;
    private Double damage;

    public PlayerStatsDTO() {
    }

    public PlayerStatsDTO(Integer id, Player player, Match match, Integer kills, Integer deaths, Integer assists, Double damage) {
        this.id = id;
        this.player = player;
        this.match = match;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.damage = damage;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }

    public Integer getKills() {
        return kills;
    }

    public void setKills(Integer kills) {
        this.kills = kills;
    }

    public Integer getDeaths() {
        return deaths;
    }

    public void setDeaths(Integer deaths) {
        this.deaths = deaths;
    }

    public Integer getAssists() {
        return assists;
    }

    public void setAssists(Integer assists) {
        this.assists = assists;
    }

    public Double getDamage() {
        return damage;
    }

    public void setDamage(Double damage) {
        this.damage = damage;
    }

    public static PlayerStatsDTO mapEntityToDTO(PlayerStats entity) {
        if (entity == null) {
            return null;
        }

        PlayerStatsDTO dto = new PlayerStatsDTO();
        dto.setId(entity.getId());
        dto.setPlayer(entity.getPlayer()); // Assuming Player has an 'id' property
        dto.setMatch(entity.getMatch());   // Assuming Match has an 'id' property
        dto.setKills(entity.getKills());
        dto.setDeaths(entity.getDeaths());
        dto.setAssists(entity.getAssists());
        dto.setDamage(entity.getDamage());

        return dto;
    }
}
