package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.MatchDTO;
import com.jpreet.cdlwiki.dto.MatchRequest;
import com.jpreet.cdlwiki.enums.RoundName;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.MatchService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/match")
@Validated
public class MatchController {

    @Autowired
    private MatchService matchService;

    @GetMapping("/")
    public ResponseEntity<List<MatchDTO>> getAllMatches() throws CDLWikiException {
        List<MatchDTO> matches = matchService.getAllMatches();
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/{matchId}")
    public ResponseEntity<MatchDTO> getMatchById(@PathVariable Integer matchId) throws CDLWikiException {
        MatchDTO match = matchService.getMatchById(matchId);
        return new ResponseEntity<>(match, HttpStatus.OK);
    }

    @GetMapping("/team/{teamId}")
    public ResponseEntity<List<MatchDTO>> getMatchesByTeam(@PathVariable Integer teamId) throws CDLWikiException {
        List<MatchDTO> matches = matchService.getMatchesByTeam(teamId);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/team/{teamId}/latest")
    public ResponseEntity<List<MatchDTO>> getLatest5MatchesByTeam(@PathVariable Integer teamId) throws CDLWikiException {
        List<MatchDTO> matches = matchService.getLatest5MatchesByTeam(teamId);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/team")
    public ResponseEntity<List<MatchDTO>> getMatchesByTeamsPlaying(@RequestParam Integer team1Id, @RequestParam Integer team2Id) throws CDLWikiException {
        List<MatchDTO> matches = matchService.getMatchesByTeamsPlaying(team1Id, team2Id);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/major/{majorId}")
    public ResponseEntity<List<MatchDTO>> getMatchesByMajor(@PathVariable Integer majorId) throws CDLWikiException {
        List<MatchDTO> matches = matchService.getMatchesByMajor(majorId);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/major", params = {"majorId", "round"})
    public ResponseEntity<List<MatchDTO>> getMatchesByMajorAndRound(@RequestParam Integer majorId, @RequestParam RoundName round) throws CDLWikiException {
        List<MatchDTO> matches = matchService.getMatchesByMajorAndRound(majorId, round);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/round/{round}")
    public ResponseEntity<List<MatchDTO>> getMatchesByRound(@PathVariable RoundName round) throws CDLWikiException {
        List<MatchDTO> matches = matchService.getMatchesByRound(round);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<String> createMatch(@Valid @RequestBody MatchRequest matchRequest) throws CDLWikiException {
        String message = matchService.createMatch(matchRequest);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
