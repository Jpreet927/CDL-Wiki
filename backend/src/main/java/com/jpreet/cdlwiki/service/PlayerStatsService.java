package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.PlayerStatsDTO;
import com.jpreet.cdlwiki.dto.PlayerStatsRequest;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.model.Player;
import com.jpreet.cdlwiki.model.PlayerStats;
import com.jpreet.cdlwiki.repository.MatchRepository;
import com.jpreet.cdlwiki.repository.PlayerRepository;
import com.jpreet.cdlwiki.repository.PlayerStatsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service(value = "playerStatsService")
@Transactional
public class PlayerStatsService {

    @Autowired
    private PlayerStatsRepository playerStatsRepo;
    @Autowired
    private PlayerRepository playerRepo;
    @Autowired
    private MatchRepository matchRepo;

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

    public PlayerStatsDTO getStatsById(Integer statsId) throws CDLWikiException {
        PlayerStats playerStats = playerStatsRepo.findById(statsId).orElseThrow(() -> new CDLWikiException("Player stats with id: " + statsId + " not found"));
        return PlayerStatsDTO.mapEntityToDTO(playerStats);
    }

    public List<PlayerStatsDTO> getStatsByPlayer(Integer playerId) throws CDLWikiException {
        List<PlayerStats> playerStats = playerStatsRepo.findByPlayerId(playerId);

        if (playerStats.isEmpty()) throw new CDLWikiException("Player stats for player id: " + playerId + " not found");

        List<PlayerStatsDTO> playerStatsDTOs = new ArrayList<>();
        for (PlayerStats s : playerStats) {
            PlayerStatsDTO sDTO = PlayerStatsDTO.mapEntityToDTO(s);
            playerStatsDTOs.add(sDTO);
        }

        return playerStatsDTOs;
    }

    public List<PlayerStatsDTO> getStatsByMatch(Integer matchId) throws CDLWikiException {
        List<PlayerStats> playerStats = playerStatsRepo.findByMatchId(matchId);

        if (playerStats.isEmpty()) throw new CDLWikiException("Player stats for match id: " + matchId + " not found");

        List<PlayerStatsDTO> playerStatsDTOs = new ArrayList<>();
        for (PlayerStats s : playerStats) {
            PlayerStatsDTO sDTO = PlayerStatsDTO.mapEntityToDTO(s);
            playerStatsDTOs.add(sDTO);
        }

        return playerStatsDTOs;
    }

    public String createStats(PlayerStatsRequest playerStatsRequest) throws CDLWikiException {
        Player player = playerRepo.findById(playerStatsRequest.getPlayerId()).orElseThrow(() -> new CDLWikiException("Player with id: " + playerStatsRequest.getPlayerId() + " not found"));
        Match match = matchRepo.findById(playerStatsRequest.getMatchId()).orElseThrow(() -> new CDLWikiException("Match with id: " + playerStatsRequest.getMatchId() + " not found"));

        PlayerStats stats = new PlayerStats();
        stats.setPlayer(player);
        stats.setMatch(match);
        stats.setKills(playerStatsRequest.getKills());
        stats.setDeaths(playerStatsRequest.getDeaths());
        stats.setAssists(playerStatsRequest.getAssists());
        stats.setDamage(playerStatsRequest.getDamage());

        PlayerStats newStats = playerStatsRepo.save(stats);
        return "Stats record created for player: " + playerStatsRequest.getPlayerId() + " for match: " + playerStatsRequest.getMatchId() + " with id: " + newStats.getId();
    }
}
