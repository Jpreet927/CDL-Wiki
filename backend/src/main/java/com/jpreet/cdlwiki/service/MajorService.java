package com.jpreet.cdlwiki.service;

import com.jpreet.cdlwiki.dto.MajorDTO;
import com.jpreet.cdlwiki.dto.MajorRequest;
import com.jpreet.cdlwiki.exception.CDLWikiException;
import com.jpreet.cdlwiki.model.Major;
import com.jpreet.cdlwiki.model.Team;
import com.jpreet.cdlwiki.repository.MajorRepository;
import com.jpreet.cdlwiki.repository.TeamRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service(value = "majorService")
@Transactional
public class MajorService {

    @Autowired
    private MajorRepository majorRepo;
    @Autowired
    private TeamRepository teamRepo;

    public List<MajorDTO> getAllMajors() throws CDLWikiException {
        List<Major> majors = new ArrayList<>();
        majorRepo.findAll().forEach(majors::add);

        if (majors.isEmpty()) throw new CDLWikiException("Majors not found");

        List<MajorDTO> majorDTOs = new ArrayList<>();
        for (Major m : majors) {
            MajorDTO mDTO = MajorDTO.mapEntityToDTO(m);
            majorDTOs.add(mDTO);
        }

        return majorDTOs;
    }

    public MajorDTO getMajorById(Integer majorId) throws CDLWikiException {
        Optional<Major> optionalMajor = majorRepo.findById(majorId);
        Major major = optionalMajor.orElseThrow(() -> new CDLWikiException("Major with id: " + majorId + " not found"));

        return MajorDTO.mapEntityToDTO(major);
    }

    public String createMajor(MajorRequest majorRequest) throws CDLWikiException {
        Major major = new Major();

        major.setHost(teamRepo.findById(majorRequest.getHostId()).orElseThrow(() -> new CDLWikiException("Host team with id: " + majorRequest.getHostId() + " not found")));
        major.setFirst(teamRepo.findById(majorRequest.getFirstId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getFirstId() + " not found")));
        major.setSecond(teamRepo.findById(majorRequest.getSecondId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getSecondId() + " not found")));
        major.setThird(teamRepo.findById(majorRequest.getThirdId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getThirdId() + " not found")));
        major.setFourth(teamRepo.findById(majorRequest.getFourthId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getFourthId() + " not found")));
        major.setFifth(teamRepo.findById(majorRequest.getFifthId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getFifthId() + " not found")));
        major.setSixth(teamRepo.findById(majorRequest.getSixthId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getSixthId() + " not found")));
        major.setSeventh(teamRepo.findById(majorRequest.getSeventhId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getSeventhId() + " not found")));
        major.setEighth(teamRepo.findById(majorRequest.getEighthId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getEighthId() + " not found")));
        major.setNinth(teamRepo.findById(majorRequest.getNinthId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getNinthId() + " not found")));
        major.setTenth(teamRepo.findById(majorRequest.getTenthId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getTenthId() + " not found")));
        major.setEleventh(teamRepo.findById(majorRequest.getEleventhId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getEleventhId() + " not found")));
        major.setTwelfth(teamRepo.findById(majorRequest.getTwelfthId()).orElseThrow(() -> new CDLWikiException("Team with id: " + majorRequest.getTwelfthId() + " not found")));
        major.setLocation(majorRequest.getLocation());

        Major newMajor = majorRepo.save(major);

        return "Major with id: " + newMajor.getId() + " saved successfully";
    }

    public String updateMajorPlacings(Integer majorId, String placing, Integer teamId) throws CDLWikiException {
        Major major = majorRepo.findById(majorId).orElseThrow(() -> new CDLWikiException("Major with id: " + majorId + " not found"));

        switch (placing) {
            case "first":
                major.setFirst(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "second":
                major.setSecond(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "third":
                major.setThird(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "fourth":
                major.setFourth(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "fifth":
                major.setFifth(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "sixth":
                major.setSixth(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "seventh":
                major.setSeventh(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "eighth":
                major.setEighth(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "ninth":
                major.setNinth(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "tenth":
                major.setTenth(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "eleventh":
                major.setEleventh(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
            case "twelfth":
                major.setTwelfth(teamRepo.findById(teamId).orElseThrow(() -> new CDLWikiException("Team with id: " + teamId + " not found")));
                break;
        }

        return "Major with id: " + majorId + " updated with team: " + teamId + " placing at position" + placing;
    }
}
