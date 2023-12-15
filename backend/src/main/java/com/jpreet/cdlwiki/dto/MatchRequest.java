package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.model.Major;
import com.jpreet.cdlwiki.model.Team;

import java.util.Date;

public class MatchRequest {
    private Integer majorId;
    private Integer team1Id;
    private Integer team2Id;
    private Integer team1Score;
    private Integer team2Score;
    private Date date;

    public MatchRequest() {
    }

    public MatchRequest(Integer majorId, Integer team1Id, Integer team2Id, Integer team1Score, Integer team2Score, Date date) {
        this.majorId = majorId;
        this.team1Id = team1Id;
        this.team2Id = team2Id;
        this.team1Score = team1Score;
        this.team2Score = team2Score;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
