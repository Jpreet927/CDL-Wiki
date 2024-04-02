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
    private String owner;
    private Integer points;
    private String ticker;
    private String logoDark;
    private String logoLight;

    public TeamDTO() {}

    public TeamDTO(Integer id, String name, String location, Date created, String affiliated, String coach, Integer points, String owner, String ticker, String logoDark, String logoLight) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.created = created;
        this.affiliated = affiliated;
        this.coach = coach;
        this.owner = owner;
        this.points = points;
        this.ticker = ticker;
        this.logoDark = logoDark;
        this.logoLight = logoLight;
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

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public String getLogoDark() {
        return logoDark;
    }

    public void setLogoDark(String logoDark) {
        this.logoDark = logoDark;
    }

    public String getLogoLight() {
        return logoLight;
    }

    public void setLogoLight(String logoLight) {
        this.logoLight = logoLight;
    }

    public static TeamDTO mapEntityToDTO(Team entity) {
        if (entity == null) {
            return null;
        }

        TeamDTO dto = new TeamDTO();

        dto.setId(entity.getId());
        dto.setAffiliated(entity.getAffiliated());
        dto.setCoach(entity.getCoach());
        dto.setName(entity.getName());
        dto.setCreated(entity.getCreated());
        dto.setLocation(entity.getLocation());
        dto.setPoints(entity.getPoints());
        dto.setOwner(entity.getOwner());
        dto.setTicker(entity.getTicker());
        dto.setLogoDark(entity.getLogoDark());
        dto.setLogoLight(entity.getLogoLight());

        return dto;
    }
}
