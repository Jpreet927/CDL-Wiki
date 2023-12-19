package com.jpreet.cdlwiki.controller;

import com.jpreet.cdlwiki.dto.MajorDTO;
import com.jpreet.cdlwiki.dto.MajorRequest;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Validated
@RequestMapping(value = "/api/majors/")
public class MajorController {

    @Autowired
    private MajorService majorService;

    @GetMapping(value = "/")
    public ResponseEntity<List<MajorDTO>> getAllMajors() throws CDLWikiException {
        List<MajorDTO> majors = majorService.getAllMajors();
        return new ResponseEntity<>(majors, HttpStatus.OK);
    }

    @GetMapping(value = "/{majorId}")
    public ResponseEntity<MajorDTO> getMajorById(@PathVariable Integer majorId) throws CDLWikiException {
        MajorDTO major = majorService.getMajorById(majorId);
        return new ResponseEntity<>(major, HttpStatus.OK);
    }

    @PostMapping(value = "/")
    public ResponseEntity<String> createMajor(@RequestBody MajorRequest majorRequest) throws CDLWikiException {
        String message = majorService.createMajor(majorRequest);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @PatchMapping(value = "/{majorId}/placings")
    public ResponseEntity<String> updateMajorPlacings(@PathVariable Integer majorId, @RequestParam String placing, @RequestParam Integer teamId) throws CDLWikiException {
        String message = majorService.updateMajorPlacings(majorId, placing, teamId);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
