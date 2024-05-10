package com.jpreet.cdlwiki.filter;

import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Auth;
import com.jpreet.cdlwiki.service.AuthService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import java.io.IOException;
import java.util.Collections;

@Component
public class ApiKeyFilter extends OncePerRequestFilter {
    private final AuthService authService;
    private static final String AUTH_TOKEN_HEADER_NAME = "X-API-KEY";

    public ApiKeyFilter(AuthService authService) {
        this.authService = authService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String apiKey = request.getHeader(AUTH_TOKEN_HEADER_NAME);

        try {
            var authenticationToken = new UsernamePasswordAuthenticationToken(apiKey,
                    apiKey, Collections.emptyList());
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);

            Auth auth = authService.getAuthentication(apiKey);
            filterChain.doFilter(request, response);
        } catch (CDLWikiException e) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), e.getMessage());
        }
    }
}
