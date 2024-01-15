package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.enums.RoundName;
import com.jpreet.cdlwiki.model.Match;

public class RoundRequest {
    private RoundName round;
    private Integer matchId;
    private Integer majorId;

    public RoundRequest() {
    }

    public RoundRequest(RoundName round, Integer matchId, Integer majorId) {
        this.round = round;
        this.matchId = matchId;
        this.majorId = majorId;
    }

    public RoundName getRound() {
        return round;
    }

    public void setRound(RoundName round) {
        this.round = round;
    }

    public Integer getMatchId() {
        return matchId;
    }

    public void setMatchId(Integer matchId) {
        this.matchId = matchId;
    }

    public Integer getMajorId() {
        return majorId;
    }

    public void setMajorId(Integer majorId) {
        this.majorId = majorId;
    }
}
