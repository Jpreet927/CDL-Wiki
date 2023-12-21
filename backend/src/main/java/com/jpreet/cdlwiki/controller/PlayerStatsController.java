package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.PlayerStatsDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.PlayerStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/stats/")
@Validated
public class PlayerStatsController {

    @Autowired
    private PlayerStatsService playerStatsService;

    @GetMapping(value = "/")
    public ResponseEntity<List<PlayerStatsDTO>> getAllStats() throws CDLWikiException {
        List<PlayerStatsDTO> playerStats = playerStatsService.getAllStats();
        return new ResponseEntity<>(playerStats, HttpStatus.OK);
    }

    @GetMapping(value = "/{statsId}")
    public ResponseEntity<PlayerStatsDTO> getStatsById(@PathVariable Integer statsId) throws CDLWikiException {
        PlayerStatsDTO playerStats = playerStatsService.getStatsById(statsId);
        return new ResponseEntity<>(playerStats, HttpStatus.OK);
    }

    @GetMapping(value = "/player/{playerId}")
    public ResponseEntity<List<PlayerStatsDTO>> getStatsByPlayer(@PathVariable Integer playerId) throws CDLWikiException {
        List<PlayerStatsDTO> playerStats = playerStatsService.getStatsByPlayer(playerId);
        return new ResponseEntity<>(playerStats, HttpStatus.OK);
    }

    @GetMapping(value = "/match/{matchId}")
    public ResponseEntity<List<PlayerStatsDTO>> getStatsByMatch(@PathVariable Integer matchId) throws CDLWikiException {
        List<PlayerStatsDTO> playerStats = playerStatsService.getStatsByMatch(matchId);
        return new ResponseEntity<>(playerStats, HttpStatus.OK);
    }
}
