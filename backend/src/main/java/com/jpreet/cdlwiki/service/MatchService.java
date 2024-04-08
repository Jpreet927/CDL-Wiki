package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.MatchDTO;
import com.jpreet.cdlwiki.dto.MatchRequest;
import com.jpreet.cdlwiki.enums.RoundName;
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
import java.util.Date;
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

    public List<MatchDTO> getAllMatchesAfterDate(Date date) throws CDLWikiException {
        List<Match> matches = matchRepo.findAllMatchesAfterDate(date);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getAllMatchesBeforeDate(Date date) throws CDLWikiException {
        List<Match> matches = matchRepo.findAllMatchesBeforeDate(date);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public MatchDTO getMatchById(Integer matchId) throws CDLWikiException {
        Match match = matchRepo.findById(matchId).orElseThrow(() -> new CDLWikiException("Match with id: " + matchId + " not found"));
        return MatchDTO.mapEntityToDTO(match);
    }

    public List<MatchDTO> getMatchesByTeamAfterDate(Integer teamId, Date date) throws CDLWikiException {
        List<Match> matches = matchRepo.findByTeamAfterDate(teamId, date);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getMatchesByTeamBeforeDate(Integer teamId, Date date) throws CDLWikiException {
        List<Match> matches = matchRepo.findByTeamBeforeDate(teamId, date);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getNext5ByTeam(Integer teamId, Date date) throws CDLWikiException {
        List<Match> matches = matchRepo.findNext5ByTeam(teamId, date);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getPrevious5ByTeam(Integer teamId, Date date) throws CDLWikiException {
        List<Match> matches = matchRepo.findPrevious5ByTeam(teamId, date);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getMatchesByTeamsPlaying(Integer team1Id, Integer team2Id) throws CDLWikiException {
        List<Match> matches = matchRepo.findByTeamsPlaying(team1Id, team2Id);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getMatchesByMajorAfterDate(Integer majorId, Date date) throws CDLWikiException {
        List<Match> matches = matchRepo.findByMajorAfterDate(majorId, date);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getMatchesByMajorBeforeDate(Integer majorId, Date date) throws CDLWikiException {
        List<Match> matches = matchRepo.findByMajorBeforeDate(majorId, date);

        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getMatchesByMajorAndRound(Integer majorId, RoundName round) throws CDLWikiException {
        List<Match> matches = matchRepo.findByMajorAndRound(majorId, round);

        if (!majorRepo.existsById(majorId)) throw new CDLWikiException("Major with id: " + majorId + " not found");
        if (matches.isEmpty()) throw new CDLWikiException("Matches not found");

        List<MatchDTO> matchDTOs = new ArrayList<>();
        for (Match m : matches) {
            MatchDTO mDTO = MatchDTO.mapEntityToDTO(m);
            matchDTOs.add(mDTO);
        }

        return matchDTOs;
    }

    public List<MatchDTO> getMatchesByRound(RoundName round) throws CDLWikiException {
        List<Match> matches = matchRepo.findByRound(round);

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

        match.setMajorId(matchRequest.getMajorId());
        match.setTeam1(team1);
        match.setTeam2(team2);
        match.setTeam1Score(matchRequest.getTeam1Score());
        match.setTeam2Score(matchRequest.getTeam2Score());
        match.setRound(matchRequest.getRound());
        match.setDate(matchRequest.getDate());

        Match newMatch = matchRepo.save(match);

        return "Match with id: " + newMatch.getId() + " created successfully";
    }
}
