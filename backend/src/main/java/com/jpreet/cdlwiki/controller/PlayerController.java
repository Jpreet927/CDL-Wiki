package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.PlayerDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class PlayerController {
    @Autowired
    PlayerService playerService;

    @GetMapping(value = "/players")
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() throws CDLWikiException {
        List<PlayerDTO> players = playerService.getAllPlayers();
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @GetMapping(value = "/players/{playerId}")
    public ResponseEntity<PlayerDTO> getPlayerById(@PathVariable Integer playerId) throws CDLWikiException {
        PlayerDTO playerDTO = playerService.getPlayerById(playerId);
        return new ResponseEntity<>(playerDTO, HttpStatus.OK);
    }

    @GetMapping(value = "/players/team/{teamId}")
    public ResponseEntity<List<PlayerDTO>> getPlayersByTeamId(@PathVariable Integer teamId) throws CDLWikiException {
        List<PlayerDTO> players = playerService.getPlayersByTeamId(teamId);
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @GetMapping(value = "/players/role/{role}")
    public ResponseEntity<List<PlayerDTO>> getPlayersByRole(@PathVariable String role) throws CDLWikiException {
        List<PlayerDTO> players = playerService.getPlayersByRole(role);
        return new ResponseEntity<>(players, HttpStatus.OK);
    }

    @GetMapping(value = "/players/nationality/{nationality}")
    public ResponseEntity<List<PlayerDTO>> getPlayersByNationality(@PathVariable String nationality) throws CDLWikiException {
        List<PlayerDTO> players = playerService.getPlayersByNationality(nationality);
        return new ResponseEntity<>(players, HttpStatus.OK);
    }
}
