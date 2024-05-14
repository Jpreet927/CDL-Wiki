package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.TeamDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Team;
import com.jpreet.cdlwiki.repository.TeamRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service(value = "teamService")
@Transactional
public class TeamService {
    @Autowired
    private TeamRepository teamRepo;

    // need to define exception messages in separate file
    public List<TeamDTO> getAllTeams() throws CDLWikiException {
        List<Team> teams = teamRepo.getAllTeamsByOrderByNameAsc();

        if (teams.isEmpty()) throw new CDLWikiException("Teams not found");

        List<TeamDTO> teamDTOs = new ArrayList<>();
        for (Team t : teams) {
            TeamDTO tDTO = TeamDTO.mapEntityToDTO(t);
            teamDTOs.add(tDTO);
        }

        return teamDTOs;
    }

    public TeamDTO getTeamById(Integer id) throws CDLWikiException {
        Optional<Team> optionalTeam = teamRepo.findById(id);
        Team team = optionalTeam.orElseThrow(() -> new CDLWikiException("Team with id: " + id + " not found"));

        return TeamDTO.mapEntityToDTO(team);
    }

    public List<TeamDTO> getAllTeamsOrderedByPoints() throws CDLWikiException {
        List<Team> teams = teamRepo.getAllTeamsByOrderByPointsDesc();

        if (teams.isEmpty()) throw new CDLWikiException("Teams not found");

        List<TeamDTO> teamDTOs = new ArrayList<>();
        for (Team t : teams) {
            TeamDTO tDTO = TeamDTO.mapEntityToDTO(t);
            teamDTOs.add(tDTO);
        }

        return teamDTOs;
    }
}
