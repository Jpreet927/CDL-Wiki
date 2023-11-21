package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "playerService")
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepo;
}
