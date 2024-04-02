package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.TeamDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.PlayerService;
import com.jpreet.cdlwiki.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/teams/")
@Validated
public class TeamController {
    @Autowired
    TeamService teamService;

    @GetMapping(value = "/")
    public ResponseEntity<List<TeamDTO>> getAllTeams() throws CDLWikiException {
        List<TeamDTO> teams = teamService.getAllTeams();
        return new ResponseEntity<List<TeamDTO>>(teams, HttpStatus.OK);
    }

    @GetMapping(value = "/{teamId}")
    public ResponseEntity<TeamDTO> getTeamById(@PathVariable Integer teamId) throws CDLWikiException {
        TeamDTO team = teamService.getTeamById(teamId);
        return new ResponseEntity<>(team, HttpStatus.OK);
    }

    @GetMapping(value = "/points")
    public ResponseEntity<List<TeamDTO>> getAllTeamsOrderedByPoints() throws CDLWikiException {
        List<TeamDTO> teams = teamService.getAllTeamsOrderedByPoints();
        return new ResponseEntity<>(teams, HttpStatus.OK);
    }
}
