package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.PlayerDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Player;
import com.jpreet.cdlwiki.repository.PlayerRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service(value = "playerService")
@Transactional
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepo;

    // need to define exception messages in separate file
    public List<PlayerDTO> getAllPlayers() throws CDLWikiException {
        List<Player> players = new ArrayList<>();
        playerRepo.findAll().forEach(players::add);

        if (players.isEmpty()) throw new CDLWikiException("Players not found");

        List<PlayerDTO> playerDTOs = new ArrayList<>();
        for (Player p : players) {
            PlayerDTO pDTO = PlayerDTO.convertEntityToDTO(p);
            playerDTOs.add(pDTO);
        }

        return playerDTOs;
    }

    public PlayerDTO getPlayerById(Integer id) throws CDLWikiException {
        Optional<Player> optionalPlayer = playerRepo.findById(id);
        Player player = optionalPlayer.orElseThrow(() -> new CDLWikiException("Player with id: " + id + " not found"));

        return PlayerDTO.convertEntityToDTO(player);
    }

    public List<PlayerDTO> getPlayersByTeamId(Integer teamId) throws CDLWikiException {
        List<Player> players = playerRepo.getPlayerByTeamId(teamId);

        if (players.isEmpty()) throw new CDLWikiException("No players found with team id: " + teamId);

        List<PlayerDTO> playerDTOs = new ArrayList<>();
        for (Player p : players) {
            PlayerDTO pDTO = PlayerDTO.convertEntityToDTO(p);
            playerDTOs.add(pDTO);
        }

        return playerDTOs;
    }

    public List<PlayerDTO> getPlayersByRole(String role) throws CDLWikiException {
        List<Player> players = playerRepo.getPlayerByRole(role);

        if (players.isEmpty()) throw new CDLWikiException("No players found with " + role + " role");

        List<PlayerDTO> playerDTOs = new ArrayList<>();
        for (Player p : players) {
            PlayerDTO pDTO = PlayerDTO.convertEntityToDTO(p);
            playerDTOs.add(pDTO);
        }

        return playerDTOs;
    }

    public List<PlayerDTO> getPlayersByNationality(String nationality) throws CDLWikiException {
        List<Player> players = playerRepo.getPlayerByNationality(nationality);

        if (players.isEmpty()) throw new CDLWikiException("No players found with " + nationality + " nationality");

        List<PlayerDTO> playerDTOs = new ArrayList<>();
        for (Player p : players) {
            PlayerDTO pDTO = PlayerDTO.convertEntityToDTO(p);
            playerDTOs.add(pDTO);
        }

        return playerDTOs;
    }
}
