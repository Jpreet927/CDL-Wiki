package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.AuthDTO;
import com.jpreet.cdlwiki.dto.AuthRequest;
import com.jpreet.cdlwiki.dto.MatchDTO;
import com.jpreet.cdlwiki.enums.Role;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Auth;
import com.jpreet.cdlwiki.model.Match;
import com.jpreet.cdlwiki.repository.AuthRepository;
import com.jpreet.cdlwiki.utility.AuthHelper;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service(value = "authService")
public class AuthService implements UserDetailsService {

    @Autowired
    private AuthRepository authRepo;

    public AuthService() {
    }

    @Override
    public UserDetails loadUserByUsername(String apiKey) throws UsernameNotFoundException {
        Auth user = this.getAuthentication(apiKey);

        if (user != null) {
            return User.builder()
                    .username(user.getUsername())
                    .password("")
                    .roles(user.getRole().toString().split(" "))
                    .build();
        } else {
            throw new UsernameNotFoundException(apiKey);
        }
    }

    public Auth getAuthentication(String apiKey) throws UsernameNotFoundException {
        if (apiKey == null) {
            throw new UsernameNotFoundException("Invalid API Key");
        }

        Optional<Auth> optionalAuth = authRepo.findByApiKey(apiKey);
        Auth auth = optionalAuth.orElseThrow(() -> new UsernameNotFoundException("Invalid API Key"));

        return auth;
    }

    public Set<GrantedAuthority> getAuthorities(Role role) {
        String[] roles = role.toString().split(",");
        Set<GrantedAuthority> authorities = new HashSet<>();

        for (int i = 0; i < roles.length; i++) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        }

        return authorities;
    }

    public List<AuthDTO> getAllAuthenticatedUsers() throws CDLWikiException {
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
