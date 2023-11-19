package com.jpreet.cdlwiki.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String alias;
    private String name;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "team_id")
    private Team team;
    private Date dob;
    private String nationality;
    private String role;
    private String image;
}
