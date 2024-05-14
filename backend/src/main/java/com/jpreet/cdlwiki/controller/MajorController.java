package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.MajorDTO;
import com.jpreet.cdlwiki.dto.MajorRequest;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/majors/")
@Validated
public class MajorController {

    @Autowired
    private MajorService majorService;

    @GetMapping("/")
    public ResponseEntity<List<MajorDTO>> getAllMajors() throws CDLWikiException {
        List<MajorDTO> majors = majorService.getAllMajors();
        return new ResponseEntity<>(majors, HttpStatus.OK);
    }

    @GetMapping("/{majorId}")
    public ResponseEntity<MajorDTO> getMajorById(@PathVariable Integer majorId) throws CDLWikiException {
        MajorDTO major = majorService.getMajorById(majorId);
        return new ResponseEntity<>(major, HttpStatus.OK);
    }

    @PostMapping("/")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> createMajor(@RequestBody MajorRequest majorRequest) throws CDLWikiException {
        String message = majorService.createMajor(majorRequest);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PatchMapping("/{majorId}/placings")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> updateMajorPlacings(@PathVariable Integer majorId, @RequestParam String placing, @RequestParam Integer teamId) throws CDLWikiException {
        String message = majorService.updateMajorPlacings(majorId, placing, teamId);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
