package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.TeamDTO;
import com.jpreet.cdlwiki.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@Validated
@RequestMapping(value = "/api")
public class TeamController {
    @Autowired
    PlayerService playerService;

    @GetMapping(value = "/teams")
    public List<TeamDTO> getAllTeams() {
        List<TeamDTO> teams = new ArrayList<TeamDTO>();
        return teams;
    }

    @GetMapping(value = "/teams/{teamId}")
    public TeamDTO getTeamById(@PathVariable Integer teamId) {
        TeamDTO team = new TeamDTO();
        return team;
    }
}
