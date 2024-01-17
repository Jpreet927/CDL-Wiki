package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.enums.RoundName;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

import java.util.Date;

public class MatchRequest {
    private Integer majorId;
    private Integer team1Id;
    private Integer team2Id;
    @Min(value = 0, message = "Score cannot be less than 0")
    @Max(value = 5, message = "Score cannot be greater than 5")
    private Integer team1Score;
    @Min(value = 0, message = "Score cannot be less than 0")
    @Max(value = 5, message = "Score cannot be greater than 5")
    private Integer team2Score;
    private RoundName round;
    private Date date;

    public MatchRequest() {
    }

    public MatchRequest(Integer majorId, Integer team1Id, Integer team2Id, Integer team1Score, Integer team2Score, RoundName round, Date date) {
        this.majorId = majorId;
        this.team1Id = team1Id;
        this.team2Id = team2Id;
        this.team1Score = team1Score;
        this.team2Score = team2Score;
        this.round = round;
        this.date = date;
    }

    public Integer getMajorId() {
        return majorId;
    }

    public void setMajorId(Integer majorId) {
        this.majorId = majorId;
    }

    public Integer getTeam1Id() {
        return team1Id;
    }

    public void setTeam1Id(Integer team1Id) {
        this.team1Id = team1Id;
    }

    public Integer getTeam2Id() {
        return team2Id;
    }

    public void setTeam2Id(Integer team2Id) {
        this.team2Id = team2Id;
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
