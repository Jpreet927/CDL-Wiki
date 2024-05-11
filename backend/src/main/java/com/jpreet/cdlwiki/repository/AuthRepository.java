package com.jpreet.cdlwiki.repository;

import com.jpreet.cdlwiki.model.Auth;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface AuthRepository extends CrudRepository<Auth, Integer> {
    public Optional<Auth> findByApiKey(String apiKey);
    public Optional<Auth> findByEmail(String email);
    public Optional<Auth> findByUsername(String username);
}
