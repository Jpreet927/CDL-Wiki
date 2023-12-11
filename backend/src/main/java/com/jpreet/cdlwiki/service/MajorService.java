package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.repository.MajorRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "majorService")
@Transactional
public class MajorService {

    @Autowired
    private MajorRepository majorRepo;
}
