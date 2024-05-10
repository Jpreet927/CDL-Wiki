package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Auth;
import com.jpreet.cdlwiki.repository.AuthRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service(value = "authService")
public class AuthService {

    @Autowired
    private AuthRepository authRepo;

    public AuthService() {
    }

    public Auth getAuthentication(String apiKey) throws CDLWikiException {
        if (apiKey == null) {
            throw new CDLWikiException("Invalid API Key");
        }

        Optional<Auth> optionalAuth = authRepo.findByApiKey(apiKey);
        return optionalAuth.orElseThrow(() -> new CDLWikiException("Invalid API Key"));
    }
}

//https://smattme.com/posts/spring-boot-api-key-authentication/
