package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.enums.RoundName;
import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.model.Team;

import java.util.Date;

public class MatchDTO {
    private Integer id;
    private Integer majorId;
    private Team team1;
    private Team team2;
    private Integer team1Score;
    private Integer team2Score;
    private RoundName round;
    private Integer roundOrder;
    private Date date;

    public MatchDTO() {
    }

    public MatchDTO(Integer id, Integer majorId, Team team1, Team team2, Integer team1Score, Integer team2Score, RoundName round, Integer roundOrder, Date date) {
        this.id = id;
        this.majorId = majorId;
        this.team1 = team1;
        this.team2 = team2;
        this.team1Score = team1Score;
        this.team2Score = team2Score;
        this.round = round;
        this.roundOrder = roundOrder;
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

    public Integer getRoundOrder() {
        return roundOrder;
    }

    public void setRoundOrder(Integer roundOrder) {
        this.roundOrder = roundOrder;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public static MatchDTO mapEntityToDTO(Match entity) {
        if (entity == null) {
            return null;
        }

        MatchDTO dto = new MatchDTO();
        dto.setId(entity.getId());
        dto.setMajorId(entity.getMajorId());
        dto.setTeam1(entity.getTeam1());
        dto.setTeam2(entity.getTeam2());
        dto.setTeam1Score(entity.getTeam1Score());
        dto.setTeam2Score(entity.getTeam2Score());
        dto.setRound(entity.getRound());
        dto.setRoundOrder(entity.getRoundOrder());
        dto.setDate(entity.getDate());

        return dto;
    }
}
