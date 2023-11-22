package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.model.Team;

import java.util.Date;

public class TeamDTO {
    private Integer id;
    private String name;
    private String location;
    private Date created;
    private String affiliated;
    private String coach;
    private Integer points;

    public TeamDTO() {}

    public TeamDTO(Integer id, String name, String location, Date created, String affiliated, String coach, Integer points) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.created = created;
        this.affiliated = affiliated;
        this.coach = coach;
        this.points = points;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public String getAffiliated() {
        return affiliated;
    }

    public void setAffiliated(String affiliated) {
        this.affiliated = affiliated;
    }

    public String getCoach() {
        return coach;
    }

    public void setCoach(String coach) {
        this.coach = coach;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public static TeamDTO convertEntityToDTO(Team team) {
        TeamDTO teamDTO = new TeamDTO();

        teamDTO.setId(team.getId());
        teamDTO.setAffiliated(team.getAffiliated());
        teamDTO.setCoach(team.getCoach());
        teamDTO.setName(team.getName());
        teamDTO.setCreated(team.getCreated());
        teamDTO.setLocation(team.getLocation());
        teamDTO.setPoints(team.getPoints());

        return teamDTO;
    }
}
