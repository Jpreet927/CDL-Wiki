package com.jpreet.cdlwiki.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String location;
    private Date created;
    private String affiliated;
    private String coach;
    private String owner;
    private Integer points;
    private String bgColoured;
    private String bgDark;
    private String bgLight;
    private String logo;

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

    public String getBgColoured() {
        return bgColoured;
    }

    public void setBgColoured(String bgColoured) {
        this.bgColoured = bgColoured;
    }

    public String getBgDark() {
        return bgDark;
    }

    public void setBgDark(String bgDark) {
        this.bgDark = bgDark;
    }

    public String getBgLight() {
        return bgLight;
    }

    public void setBgLight(String bgLight) {
        this.bgLight = bgLight;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }
}


