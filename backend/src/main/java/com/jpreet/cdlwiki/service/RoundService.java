package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.repository.RoundRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "roundService")
@Transactional
public class RoundService {

    @Autowired
    private RoundRepository roundRepo;
}
