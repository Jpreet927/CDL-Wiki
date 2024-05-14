package com.jpreet.cdlwiki.model;

import com.jpreet.cdlwiki.enums.RoundName;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "major_id")
    private Integer majorId;
    @ManyToOne
    @JoinColumn(name = "team_1_id")
    private Team team1;
    @ManyToOne
    @JoinColumn(name = "team_2_id")
    private Team team2;
    private Integer team1Score;
    private Integer team2Score;
    private RoundName round;
    private Date date;

    public Match() {
    }

    public Match(Integer id, Integer majorId, Team team1, Team team2, Integer team1Score, Integer team2Score, RoundName round, Date date) {
        this.id = id;
        this.majorId = majorId;
        this.team1 = team1;
        this.team2 = team2;
        this.team1Score = team1Score;
        this.team2Score = team2Score;
        this.round = round;
        this.date = date;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMajorId() {
        return majorId;
    }

    public void setMajorId(Integer majorId) {
        this.majorId = majorId;
    }

    public Team getTeam1() {
        return team1;
    }

    public void setTeam1(Team team1) {
        this.team1 = team1;
    }

    public Team getTeam2() {
        return team2;
    }

    public void setTeam2(Team team2) {
        this.team2 = team2;
    }

    public Integer getTeam1Score() {
        return team1Score;
    }

    public void setTeam1Score(Integer team1Score) {
        this.team1Score = team1Score;
    }

    public Integer getTeam2Score() {
        return team2Score;
    }

    public void setTeam2Score(Integer team2Score) {
        this.team2Score = team2Score;
    }

    public RoundName getRound() {
        return round;
    }

    public void setRound(RoundName round) {
        this.round = round;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
