package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.MatchDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.repository.MatchRepository;
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
}
