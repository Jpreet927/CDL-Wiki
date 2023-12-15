package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.Round;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RoundRepository extends CrudRepository<Round, Integer> {
    public List<Round> findByRound(String round);
    public List<Round> findByMajor(Integer majorId);
}
