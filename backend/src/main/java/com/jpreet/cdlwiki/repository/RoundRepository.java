package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.enums.RoundName;
import com.jpreet.cdlwiki.model.Round;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RoundRepository extends CrudRepository<Round, Integer> {
    public List<Round> findByRound(RoundName round);
    @Query("SELECT r FROM Round r WHERE r.majorId = ?1")
    public List<Round> findByMajor(Integer majorId);
}
