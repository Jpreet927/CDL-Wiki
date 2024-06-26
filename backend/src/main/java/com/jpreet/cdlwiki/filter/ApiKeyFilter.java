package com.jpreet.cdlwiki.filter;

import com.jpreet.cdlwiki.model.Auth;
import com.jpreet.cdlwiki.service.AuthService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import java.io.IOException;

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
            Auth auth = authService.getAuthentication(apiKey);

            var authenticationToken = new UsernamePasswordAuthenticationToken(apiKey,
                    apiKey, authService.getAuthorities(auth.getRole()));
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);

            filterChain.doFilter(request, response);
        } catch (UsernameNotFoundException e) {
            response.sendError(HttpStatus.UNAUTHORIZED.value(), e.getMessage());
        }
    }
}
