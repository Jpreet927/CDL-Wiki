package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.AuthRequest;
import com.jpreet.cdlwiki.dto.MajorRequest;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/users/")
@Validated
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/")
    public ResponseEntity<String> createAuthenticatedUser(@RequestBody AuthRequest authRequest) throws CDLWikiException {
        String message = authService.createAuthenticatedUser(authRequest);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
