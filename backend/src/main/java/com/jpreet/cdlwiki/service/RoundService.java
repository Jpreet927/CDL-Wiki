package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.RoundDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Round;
import com.jpreet.cdlwiki.repository.RoundRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Service(value = "roundService")
@Transactional
public class RoundService {

    @Autowired
    private RoundRepository roundRepo;

    public List<RoundDTO> getAllRounds() throws CDLWikiException {
        List<Round> rounds = new ArrayList<>();
        roundRepo.findAll().forEach(rounds::add);

        if (rounds.isEmpty()) throw new CDLWikiException("Rounds not found");

        List<RoundDTO> roundDTOs = new ArrayList<>();
        for (Round r : rounds) {
            RoundDTO rDTO = RoundDTO.mapEntityToDTO(r);
            roundDTOs.add(rDTO);
        }

        return roundDTOs;
    }

    public RoundDTO getRoundByRoundId(Integer roundId) throws CDLWikiException {
        Round round = roundRepo.findById(roundId).orElseThrow(() -> new CDLWikiException("Round with id: " + roundId + " not found"));
        return RoundDTO.mapEntityToDTO(round);
    }

    public List<RoundDTO> getRoundByRoundName(String roundName) throws CDLWikiException {
        List<Round> rounds = roundRepo.findByRound(roundName);

        if (rounds.isEmpty()) throw new CDLWikiException("Rounds with name: " + roundName + " not found");

        List<RoundDTO> roundDTOs = new ArrayList<>();
        for (Round r : rounds) {
            RoundDTO rDTO = RoundDTO.mapEntityToDTO(r);
            roundDTOs.add(rDTO);
        }

        return roundDTOs;
    }

    public List<RoundDTO> getRoundByMajorId(Integer majorId) throws CDLWikiException {
        List<Round> rounds = roundRepo.findByMajor(majorId);

        if (rounds.isEmpty()) throw new CDLWikiException("Rounds under major id: " + majorId + " not found");

        List<RoundDTO> roundDTOs = new ArrayList<>();
        for (Round r : rounds) {
            RoundDTO rDTO = RoundDTO.mapEntityToDTO(r);
            roundDTOs.add(rDTO);
        }

        return roundDTOs;
    }
}
