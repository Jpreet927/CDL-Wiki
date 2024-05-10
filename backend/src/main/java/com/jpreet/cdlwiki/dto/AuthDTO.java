package com.jpreet.cdlwiki.dto;

import com.jpreet.cdlwiki.enums.Role;
import com.jpreet.cdlwiki.model.Auth;
import com.jpreet.cdlwiki.model.Player;
import jakarta.persistence.Column;

public class AuthDTO {
    private Integer id;
    private String email;
    private String username;
    private Role role;
    private String apiKey;

    public AuthDTO() {
    }

    public AuthDTO(Integer id, String email, String username, Role role, String apiKey) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.role = role;
        this.apiKey = apiKey;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public static AuthDTO mapEntityToDTO(Auth entity) {
        if (entity == null) {
            return null;
        }

        AuthDTO dto = new AuthDTO();

        dto.setId(entity.getId());
        dto.setEmail(entity.getEmail());
        dto.setUsername(entity.getUsername());
        dto.setRole(entity.getRole());
        dto.setApiKey(entity.getApiKey());

        return dto;
    }
}
