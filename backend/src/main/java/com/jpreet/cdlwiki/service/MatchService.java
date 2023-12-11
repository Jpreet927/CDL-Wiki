package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "matchService")
public class MatchService {

    @Autowired
    private MatchRepository matchRepo;
}
