package com.jpreet.cdlwiki.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table
public class Major {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "host_id")
    private Team host;
    private String location;
    private String venue;
    private Integer prizePool;
    private Date startDate;
    private Date endDate;
    @ManyToOne
    @JoinColumn(name = "first_id")
    private Team first;
    @ManyToOne
    @JoinColumn(name = "second_id")
    private Team second;
    @ManyToOne
    @JoinColumn(name = "third_id")
    private Team third;
    @ManyToOne
    @JoinColumn(name = "fourth_id")
    private Team fourth;
    @ManyToOne
    @JoinColumn(name = "fifth_id")
    private Team fifth;
    @ManyToOne
    @JoinColumn(name = "sixth_id")
    private Team sixth;
    @ManyToOne
    @JoinColumn(name = "seventh_id")
    private Team seventh;
    @ManyToOne
    @JoinColumn(name = "eighth_id")
    private Team eighth;
    @ManyToOne
    @JoinColumn(name = "ninth_id")
    private Team ninth;
    @ManyToOne
    @JoinColumn(name = "tenth_id")
    private Team tenth;
    @ManyToOne
    @JoinColumn(name = "eleventh_id")
    private Team eleventh;
    @ManyToOne
    @JoinColumn(name = "twelfth_id")
    private Team twelfth;

    public Major() {
    }

    public Major(Integer id, Team host, String location, String venue, Integer prizePool, Date startDate, Date endDate, Team first, Team second, Team third, Team fourth, Team fifth, Team sixth, Team seventh, Team eighth, Team ninth, Team tenth, Team eleventh, Team twelfth) {
        this.id = id;
        this.host = host;
        this.location = location;
        this.venue = venue;
        this.prizePool = prizePool;
        this.startDate = startDate;
        this.endDate = endDate;
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

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public Integer getPrizePool() {
        return prizePool;
    }

    public void setPrizePool(Integer prizePool) {
        this.prizePool = prizePool;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
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
}
