package com.jpreet.cdlwiki.model;

import jakarta.persistence.*;

@Entity
@Table
public class PlayerStats {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "player_id")
    private Player player;
    @ManyToOne
    @JoinColumn(name = "match_id")
    private Match match;
    private Integer kills;
    private Integer deaths;
    private Integer assists;
    private Double damage;

    public PlayerStats() {
    }

    public PlayerStats(Integer id, Player player, Match match, Integer kills, Integer deaths, Integer assists, Double damage) {
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
}
