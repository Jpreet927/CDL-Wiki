package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.model.Player;

import java.util.Date;

public class PlayerDTO {
    private Integer id;
    private String alias;
    private String name;
    private TeamDTO team;
    private Date dob;
    private String nationality;
    private String role;
    private String image;

    public PlayerDTO() {}

    public PlayerDTO(Integer id, String alias, String name, TeamDTO team, Date dob, String nationality, String role, String image) {
        this.id = id;
        this.alias = alias;
        this.name = name;
        this.team = team;
        this.dob = dob;
        this.nationality = nationality;
        this.role = role;
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TeamDTO getTeam() {
        return team;
    }

    public void setTeam(TeamDTO team) {
        this.team = team;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public static PlayerDTO convertEntityToDTO(Player player) {
        PlayerDTO playerDTO = new PlayerDTO();

        playerDTO.setId(player.getId());
        playerDTO.setAlias(player.getAlias());
        playerDTO.setDob(player.getDob());
        playerDTO.setImage(player.getImage());
        playerDTO.setName(player.getName());
        playerDTO.setRole(player.getRole());
        playerDTO.setNationality(player.getNationality());
        playerDTO.setTeam(TeamDTO.convertEntityToDTO(player.getTeam()));

        return playerDTO;
    }
}
