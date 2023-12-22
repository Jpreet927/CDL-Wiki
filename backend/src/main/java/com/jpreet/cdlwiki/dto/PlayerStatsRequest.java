package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.model.Player;

public class PlayerStatsRequest {
    private Integer playerId;
    private Integer matchId;
    private Integer kills;
    private Integer deaths;
    private Integer assists;
    private Double damage;

    public PlayerStatsRequest() {
    }

    public PlayerStatsRequest(Integer playerId, Integer matchId, Integer kills, Integer deaths, Integer assists, Double damage) {
        this.playerId = playerId;
        this.matchId = matchId;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.damage = damage;
    }

    public Integer getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Integer playerId) {
        this.playerId = playerId;
    }

    public Integer getMatchId() {
        return matchId;
    }

    public void setMatchId(Integer matchId) {
        this.matchId = matchId;
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
}
