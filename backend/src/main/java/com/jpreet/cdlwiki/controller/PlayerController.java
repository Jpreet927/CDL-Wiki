package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.PlayerDTO;
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
public class PlayerController {
    @Autowired
    PlayerService playerService;

    @GetMapping(value = "/players")
    public List<PlayerDTO> getAllPlayers() {
        List<PlayerDTO> players = new ArrayList<PlayerDTO>();
        return players;
    }

    @GetMapping(value = "/players/{playerId}")
    public PlayerDTO getPlayerById(@PathVariable Integer playerId) {
        PlayerDTO playerDTO = new PlayerDTO();
        return playerDTO;
    }
}
