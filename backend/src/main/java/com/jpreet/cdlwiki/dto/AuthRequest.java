package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.enums.Role;

public class AuthRequest {
    private String email;
    private String username;
    private Role role;

    public AuthRequest() {
    }

    public AuthRequest(String email, String username, Role role) {
        this.email = email;
        this.username = username;
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
