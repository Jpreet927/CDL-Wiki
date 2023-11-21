package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "teamService")
public class TeamService {
    @Autowired
    private TeamRepository teamRepo;
}
