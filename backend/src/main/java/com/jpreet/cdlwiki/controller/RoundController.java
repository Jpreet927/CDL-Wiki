package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.RoundDTO;
import com.jpreet.cdlwiki.dto.RoundRequest;
import com.jpreet.cdlwiki.enums.RoundName;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.RoundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/round/")
@Validated
public class RoundController {

    @Autowired
    private RoundService roundService;

    @GetMapping(value = "/")
    public ResponseEntity<List<RoundDTO>> getAllRounds() throws CDLWikiException {
        List<RoundDTO> rounds = roundService.getAllRounds();
        return new ResponseEntity<>(rounds, HttpStatus.OK);
    }

    @GetMapping(value = "/{roundId}")
    public ResponseEntity<RoundDTO> getRoundByRoundId(@PathVariable Integer roundId) throws CDLWikiException {
        RoundDTO round = roundService.getRoundByRoundId(roundId);
        return new ResponseEntity<>(round, HttpStatus.OK);
    }

    @GetMapping(value = "/name/{roundName}") // side note - ????
    public ResponseEntity<List<RoundDTO>> getRoundByRoundName(@PathVariable String roundName) throws CDLWikiException {
        List<RoundDTO> rounds = roundService.getRoundByRoundName(roundName);
        return new ResponseEntity<>(rounds, HttpStatus.OK);
    }

    @GetMapping(value = "/major/{majorId}")
    public ResponseEntity<List<RoundDTO>> getRoundByMajorId(@PathVariable Integer majorId) throws CDLWikiException {
        List<RoundDTO> rounds = roundService.getRoundByMajorId(majorId);
        return new ResponseEntity<>(rounds, HttpStatus.OK);
    }

    @PostMapping(value = "/")
    public ResponseEntity<String> createRound(@RequestBody RoundRequest roundRequest) throws CDLWikiException {
        String message = roundService.createRound(roundRequest);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
