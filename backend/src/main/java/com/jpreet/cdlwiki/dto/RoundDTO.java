package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.enums.RoundName;
import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.model.Round;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

public class RoundDTO {
    private Integer id;
    private RoundName round;
    private Integer majorId;
    private MatchDTO match;

    public RoundDTO() {
    }

    public RoundDTO(Integer id, RoundName round, Integer majorId, MatchDTO match) {
        this.id = id;
        this.round = round;
        this.majorId = majorId;
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

    public Integer getMajorId() {
        return majorId;
    }

    public void setMajorId(Integer majorId) {
        this.majorId = majorId;
    }

    public MatchDTO getMatch() {
        return match;
    }

    public void setMatch(MatchDTO match) {
        this.match = match;
    }

    public static RoundDTO mapEntityToDTO(Round entity) {
        if (entity == null) {
            return null;
        }

        RoundDTO dto = new RoundDTO();
        dto.setId(entity.getId());
        dto.setRound(entity.getRound());
        dto.setMajorId(entity.getMajorId());
        dto.setMatch(MatchDTO.mapEntityToDTO(entity.getMatch()));

        return dto;
    }
}
