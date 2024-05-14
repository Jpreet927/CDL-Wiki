package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.MatchDTO;
import com.jpreet.cdlwiki.dto.MatchRequest;
import com.jpreet.cdlwiki.enums.RoundName;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.MatchService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
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

    @GetMapping(value = "/past", params = {"date"})
    public ResponseEntity<List<MatchDTO>> getAllMatchesBeforeDate(@RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getAllMatchesBeforeDate(date);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/past", params = { "date", "offset", "size" })
    public ResponseEntity<Page<MatchDTO>> getAllMatchesBeforeDatePaginated(@RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date, @RequestParam(name = "offset", defaultValue = "0") Integer offset, @RequestParam(name = "size", defaultValue = "10") Integer size) throws CDLWikiException {
        Pageable pageable = PageRequest.of(offset, size);
        Page<MatchDTO> matches = matchService.getAllMatchesBeforeDatePaginated(pageable, date);

        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/future", params = {"date"})
    public ResponseEntity<List<MatchDTO>> getAllMatchesAfterDate(@RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getAllMatchesAfterDate(date);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/future", params = { "date", "offset", "size" })
    public ResponseEntity<Page<MatchDTO>> getAllMatchesAfterDatePaginated(@RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date, @RequestParam(name = "offset", defaultValue = "0") Integer offset, @RequestParam(name = "size", defaultValue = "10") Integer size) throws CDLWikiException {
        Pageable pageable = PageRequest.of(offset, size);
        Page<MatchDTO> matches = matchService.getAllMatchesAfterDatePaginated(pageable, date);

        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/{matchId}")
    public ResponseEntity<MatchDTO> getMatchById(@PathVariable Integer matchId) throws CDLWikiException {
        MatchDTO match = matchService.getMatchById(matchId);
        return new ResponseEntity<>(match, HttpStatus.OK);
    }

    @GetMapping(value = "/team/{teamId}/past", params = "date")
    public ResponseEntity<List<MatchDTO>> getMatchesByTeamBeforeDate(@PathVariable Integer teamId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getMatchesByTeamBeforeDate(teamId, date);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/team/{teamId}/past", params = { "date", "offset", "size" })
    public ResponseEntity<Page<MatchDTO>> getMatchesByTeamBeforeDatePaginated(@PathVariable Integer teamId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date, @RequestParam(name = "offset", defaultValue = "0") Integer offset, @RequestParam(name = "size", defaultValue = "10") Integer size) throws CDLWikiException {
        Pageable pageable = PageRequest.of(offset, size);
        Page<MatchDTO> matches = matchService.getMatchesByTeamBeforeDatePaginated(pageable, teamId, date);

        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/team/{teamId}/future", params = "date")
    public ResponseEntity<List<MatchDTO>> getMatchesByTeamAfterDate(@PathVariable Integer teamId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getMatchesByTeamAfterDate(teamId, date);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/team/{teamId}/future", params = { "date", "offset", "size" })
    public ResponseEntity<Page<MatchDTO>> getMatchesByTeamAfterDatePaginated(@PathVariable Integer teamId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date, @RequestParam(name = "offset", defaultValue = "0") Integer offset, @RequestParam(name = "size", defaultValue = "10") Integer size) throws CDLWikiException {
        Pageable pageable = PageRequest.of(offset, size);
        Page<MatchDTO> matches = matchService.getMatchesByTeamAfterDatePaginated(pageable, teamId, date);

        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/team/{teamId}/latest/past", params = "date")
    public ResponseEntity<List<MatchDTO>> getPrevious5ByTeam(@PathVariable Integer teamId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getPrevious5ByTeam(teamId, date);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/team/{teamId}/latest/future", params = "date")
    public ResponseEntity<List<MatchDTO>> getNext5ByTeam(@PathVariable Integer teamId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getNext5ByTeam(teamId, date);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/team")
    public ResponseEntity<List<MatchDTO>> getMatchesByTeamsPlaying(@RequestParam Integer team1Id, @RequestParam Integer team2Id) throws CDLWikiException {
        List<MatchDTO> matches = matchService.getMatchesByTeamsPlaying(team1Id, team2Id);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping("/major/{majorId}")
    public ResponseEntity<List<MatchDTO>> getMatchesByMajor(@PathVariable Integer majorId) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getMatchesByMajor(majorId);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/major/{majorId}/past", params = "date")
    public ResponseEntity<List<MatchDTO>> getMatchesByMajorBeforeDate(@PathVariable Integer majorId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getMatchesByMajorBeforeDate(majorId, date);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/major/{majorId}/past", params = { "date", "offset", "size" })
    public ResponseEntity<Page<MatchDTO>> getMatchesByMajorBeforeDatePaginated(@PathVariable Integer majorId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date, @RequestParam(name = "offset", defaultValue = "0") Integer offset, @RequestParam(name = "size", defaultValue = "10") Integer size) throws CDLWikiException {
        Pageable pageable = PageRequest.of(offset, size);
        Page<MatchDTO> matches = matchService.getMatchesByMajorBeforeDatePaginated(pageable, majorId, date);

        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/major/{majorId}/future", params = "date")
    public ResponseEntity<List<MatchDTO>> getMatchesByMajorAfterDate(@PathVariable Integer majorId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date) throws CDLWikiException {
        List<MatchDTO> matches;
        matches = matchService.getMatchesByMajorAfterDate(majorId, date);
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }

    @GetMapping(value = "/major/{majorId}/future", params = { "date", "offset", "size" })
    public ResponseEntity<Page<MatchDTO>> getMatchesByMajorAfterDatePaginated(@PathVariable Integer majorId, @RequestParam("date") @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss") Date date, @RequestParam(name = "offset", defaultValue = "0") Integer offset, @RequestParam(name = "size", defaultValue = "10") Integer size) throws CDLWikiException {
        Pageable pageable = PageRequest.of(offset, size);
        Page<MatchDTO> matches = matchService.getMatchesByMajorAfterDatePaginated(pageable, majorId, date);

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
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> createMatch(@Valid @RequestBody MatchRequest matchRequest) throws CDLWikiException {
        String message = matchService.createMatch(matchRequest);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
