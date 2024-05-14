package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.model.Major;
import com.jpreet.cdlwiki.model.Team;

public class MajorDTO {
    private Integer id;
    private Team host;
    private String location;
    private Team first;
    private Team second;
    private Team third;
    private Team fourth;
    private Team fifth;
    private Team sixth;
    private Team seventh;
    private Team eighth;
    private Team ninth;
    private Team tenth;
    private Team eleventh;
    private Team twelfth;

    public MajorDTO() {
    }

    public MajorDTO(Integer id, Team host, String location, Team first, Team second, Team third, Team fourth, Team fifth, Team sixth, Team seventh, Team eighth, Team ninth, Team tenth, Team eleventh, Team twelfth) {
        this.id = id;
        this.host = host;
        this.location = location;
        this.first = first;
        this.second = second;
        this.third = third;
        this.fourth = fourth;
        this.fifth = fifth;
        this.sixth = sixth;
        this.seventh = seventh;
        this.eighth = eighth;
        this.ninth = ninth;
        this.tenth = tenth;
        this.eleventh = eleventh;
        this.twelfth = twelfth;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Team getHost() {
        return host;
    }

    public void setHost(Team host) {
        this.host = host;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Team getFirst() {
        return first;
    }

    public void setFirst(Team first) {
        this.first = first;
    }

    public Team getSecond() {
        return second;
    }

    public void setSecond(Team second) {
        this.second = second;
    }

    public Team getThird() {
        return third;
    }

    public void setThird(Team third) {
        this.third = third;
    }

    public Team getFourth() {
        return fourth;
    }

    public void setFourth(Team fourth) {
        this.fourth = fourth;
    }

    public Team getFifth() {
        return fifth;
    }

    public void setFifth(Team fifth) {
        this.fifth = fifth;
    }

    public Team getSixth() {
        return sixth;
    }

    public void setSixth(Team sixth) {
        this.sixth = sixth;
    }

    public Team getSeventh() {
        return seventh;
    }

    public void setSeventh(Team seventh) {
        this.seventh = seventh;
    }

    public Team getEighth() {
        return eighth;
    }

    public void setEighth(Team eighth) {
        this.eighth = eighth;
    }

    public Team getNinth() {
        return ninth;
    }

    public void setNinth(Team ninth) {
        this.ninth = ninth;
    }

    public Team getTenth() {
        return tenth;
    }

    public void setTenth(Team tenth) {
        this.tenth = tenth;
    }

    public Team getEleventh() {
        return eleventh;
    }

    public void setEleventh(Team eleventh) {
        this.eleventh = eleventh;
    }

    public Team getTwelfth() {
        return twelfth;
    }

    public void setTwelfth(Team twelfth) {
        this.twelfth = twelfth;
    }

    public static MajorDTO mapEntityToDTO(Major entity) {
        if (entity == null) {
            return null;
        }

        MajorDTO dto = new MajorDTO();
        dto.setId(entity.getId());
        dto.setHost(entity.getHost());
        dto.setLocation(entity.getLocation());
        dto.setFirst(entity.getFirst());
        dto.setSecond(entity.getSecond());
        dto.setThird(entity.getThird());
        dto.setFourth(entity.getFourth());
        dto.setFifth(entity.getFifth());
        dto.setSixth(entity.getSixth());
        dto.setSeventh(entity.getSeventh());
        dto.setEighth(entity.getEighth());
        dto.setNinth(entity.getNinth());
        dto.setTenth(entity.getTenth());
        dto.setEleventh(entity.getEleventh());
        dto.setTwelfth(entity.getTwelfth());

        return dto;
    }
}
