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
    @ManyToOne
    @JoinColumn(name = "major_id")
    private Major major;
    @OneToOne
    @JoinColumn(name = "match_id")
    private Match match;

    public Round() {
    }

    public Round(Integer id, RoundName round, Major major, Match match) {
        this.id = id;
        this.round = round;
        this.major = major;
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

    public Major getMajor() {
        return major;
    }

    public void setMajor(Major major) {
        this.major = major;
    }

    public Match getMatch() {
        return match;
    }

    public void setMatch(Match match) {
        this.match = match;
    }
}
