package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.AuthDTO;
import com.jpreet.cdlwiki.dto.AuthRequest;
import com.jpreet.cdlwiki.dto.MatchDTO;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Auth;
import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.repository.AuthRepository;
import com.jpreet.cdlwiki.utility.AuthHelper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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

    public List<AuthDTO> getAuthenticatedUsers() throws CDLWikiException {
        List<Auth> users = new ArrayList<>();
        authRepo.findAll().forEach(users::add);

        if (users.isEmpty()) throw new CDLWikiException("Users not found");

        List<AuthDTO> userDTOs = new ArrayList<>();
        for (Auth u : users) {
            AuthDTO authDTO = AuthDTO.mapEntityToDTO(u);
            userDTOs.add(authDTO);
        }

        return userDTOs;
    }

    public String createAuthenticatedUser(AuthRequest authRequest) throws CDLWikiException {
        // check if email exists
        if (authRepo.findByEmail(authRequest.getEmail()).isPresent()) {
            throw new CDLWikiException("User with email already exists");
        }

        if (authRepo.findByUsername(authRequest.getUsername()).isPresent()) {
            throw new CDLWikiException("User with username already exists");
        }

        // create key
        String apiKey = AuthHelper.generateBase64String();

        // check if key exists
        while (authRepo.findByApiKey(apiKey).isPresent()) {
            apiKey = AuthHelper.generateBase64String();
        }

        Auth auth = new Auth();
        auth.setEmail(authRequest.getEmail());
        auth.setRole(authRequest.getRole());
        auth.setUsername(authRequest.getUsername());
        auth.setApiKey(apiKey);

        authRepo.save(auth);

        return "Authenticated user created";
    }
}

//https://smattme.com/posts/spring-boot-api-key-authentication/
