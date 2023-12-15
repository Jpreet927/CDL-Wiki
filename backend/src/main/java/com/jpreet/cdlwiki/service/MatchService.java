package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.MatchDTO;
import com.jpreet.cdlwiki.dto.MatchRequest;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Major;
import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.model.Team;
import com.jpreet.cdlwiki.repository.MajorRepository;
import com.jpreet.cdlwiki.repository.MatchRepository;
import com.jpreet.cdlwiki.repository.TeamRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Service(value = "matchService")
@Transactional
public class MatchService {

    @Autowired
    private MatchRepository matchRepo;
    @Autowired
    private TeamRepository teamRepo;
    @Autowired
    private MajorRepository majorRepo;

    public List<MatchDTO> getAllMatches() throws CDLWikiException {
        List<Match> matches = new ArrayList<>();
        matchRepo.findAll().forEach(matches::add);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getMatchesByTeam(Integer teamId) throws CDLWikiException {
        List<Match> matches = matchRepo.findByTeam1OrTeam2OrderByDateDesc(teamId);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getLatest5MatchesByTeam(Integer teamId) throws CDLWikiException {
        List<Match> matches = matchRepo.findFirst5ByTeam1OrTeam2OrderByDateDesc(teamId);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getMatchesByMajor(Integer majorId) throws CDLWikiException {
        List<Match> matches = matchRepo.findByMajorOrderByDateDesc(majorId);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public String createMatch(MatchRequest matchRequest) throws CDLWikiException {
        Match match = new Match();

        Team team1 = teamRepo.findById(matchRequest.getTeam1Id()).orElseThrow(() -> new CDLWikiException("Team with id: " + matchRequest.getTeam1Id() + " not found"));
        Team team2 = teamRepo.findById(matchRequest.getTeam2Id()).orElseThrow(() -> new CDLWikiException("Team with id: " + matchRequest.getTeam2Id() + " not found"));
        Major major = majorRepo.findById(matchRequest.getMajorId()).orElseThrow(() -> new CDLWikiException("Major with id: " + matchRequest.getMajorId() + " not found"));

        match.setMajor(major);
        match.setTeam1(team1);
        match.setTeam2(team2);
        match.setTeam1Score(matchRequest.getTeam1Score());
        match.setTeam2Score(matchRequest.getTeam2Score());
        match.setDate(matchRequest.getDate());

        Match newMatch = matchRepo.save(match);

        return "Match with id: " + newMatch.getId() + " created successfully";
    }
}