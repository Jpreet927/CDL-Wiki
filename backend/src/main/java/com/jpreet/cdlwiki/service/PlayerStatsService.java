package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.PlayerStatsDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.PlayerStats;
import com.jpreet.cdlwiki.repository.PlayerStatsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Service(value = "playerStatsService")
@Transactional
public class PlayerStatsService {

    @Autowired
    private PlayerStatsRepository playerStatsRepo;

    public List<PlayerStatsDTO> getAllStats() throws CDLWikiException {
        List<PlayerStats> playerStats = new ArrayList<>();
        playerStatsRepo.findAll().forEach(playerStats::add);

        if (playerStats.isEmpty()) throw new CDLWikiException("Player stats not found");

        List<PlayerStatsDTO> playerStatsDTOs = new ArrayList<>();
        for (PlayerStats s : playerStats) {
            PlayerStatsDTO sDTO = PlayerStatsDTO.mapEntityToDTO(s);
            playerStatsDTOs.add(sDTO);
        }

        return playerStatsDTOs;
    }

    public PlayerStatsDTO getStatsById(@PathVariable Integer statsId) throws CDLWikiException {
        PlayerStats playerStats = playerStatsRepo.findById(statsId).orElseThrow(() -> new CDLWikiException("Player stats with id: " + statsId + " not found"));
        return PlayerStatsDTO.mapEntityToDTO(playerStats);
    }

    public List<PlayerStatsDTO> getStatsByPlayer(@PathVariable Integer playerId) throws CDLWikiException {
        List<PlayerStats> playerStats = playerStatsRepo.findByPlayerId(playerId);

        if (playerStats.isEmpty()) throw new CDLWikiException("Player stats for player id: " + playerId + " not found");

        List<PlayerStatsDTO> playerStatsDTOs = new ArrayList<>();
        for (PlayerStats s : playerStats) {
            PlayerStatsDTO sDTO = PlayerStatsDTO.mapEntityToDTO(s);
            playerStatsDTOs.add(sDTO);
        }

        return playerStatsDTOs;
    }

    public List<PlayerStatsDTO> getStatsByMatch(@PathVariable Integer matchId) throws CDLWikiException {
        List<PlayerStats> playerStats = playerStatsRepo.findByMatchId(matchId);

        if (playerStats.isEmpty()) throw new CDLWikiException("Player stats for match id: " + matchId + " not found");

        List<PlayerStatsDTO> playerStatsDTOs = new ArrayList<>();
        for (PlayerStats s : playerStats) {
            PlayerStatsDTO sDTO = PlayerStatsDTO.mapEntityToDTO(s);
            playerStatsDTOs.add(sDTO);
        }

        return playerStatsDTOs;
    }
}
