package com.example.InzenjeringProject.controller;

import com.example.InzenjeringProject.cbr.CbrApplication;
import com.example.InzenjeringProject.dto.CBRResultDTO;
import com.example.InzenjeringProject.model.AttackDescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/cbrattacks")
public class CBRAttacksController {

    @Autowired
    private CbrApplication cbrApplication;

    @CrossOrigin(origins = "*")
    @GetMapping()
    public ResponseEntity<List<CBRResultDTO>> getAppointment(@RequestParam(name = "likelihood-of-attack") String likelihoodOfAttack,
                                                            @RequestParam(name = "typical-severity") String typicalSeverity,
                                                            @RequestParam String prerequisites,
                                                            @RequestParam String availability,
                                                            @RequestParam String confidentiality,
                                                            @RequestParam(name = "confidentiality-access-control-authorization") String confidentialityAccessControlAuthorization) {

        List<CBRResultDTO> test = cbrApplication.run(likelihoodOfAttack, typicalSeverity, prerequisites, availability,
                confidentiality, confidentialityAccessControlAuthorization);

        return new ResponseEntity<List<CBRResultDTO>>(test, HttpStatus.OK);
    }
}
