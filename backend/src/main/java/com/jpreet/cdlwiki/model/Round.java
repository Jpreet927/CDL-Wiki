package com.jpreet.cdlwiki.model;

import com.jpreet.cdlwiki.enums.RoundName;
import jakarta.persistence.*;

@Entity
@Table
public class Round {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Enumerated(EnumType.STRING)
    private RoundName round;
    @OneToOne
    @JoinColumn(name = "match_id")
    private Match match;

    public Round() {
    }

    public Round(Integer id, RoundName round, Match match) {
        this.id = id;
        this.round = round;
        this.match = match;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public RoundName getRound() {
        return round;
    }

    public void setRound(RoundName round) {
        this.round = round;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }
}
