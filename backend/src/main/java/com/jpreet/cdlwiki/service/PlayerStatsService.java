package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.repository.PlayerStatsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "playerStatsService")
@Transactional
public class PlayerStatsService {

    @Autowired
    private PlayerStatsRepository playerStatsRepo;
}
