package com.example.InzenjeringProject.controller;

import com.example.InzenjeringProject.bayes.BayesNetwork;
import com.example.InzenjeringProject.dto.BayesResultDTO;
import com.example.InzenjeringProject.fuzzy.FuzzyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api/fuzzy")
public class FuzzyController {

    @Autowired
    private FuzzyService fuzzyService;

    @CrossOrigin(origins = "*")
    @GetMapping()
    public ResponseEntity<Double> getFuzzy(@RequestParam(name = "attack-complexity") Double attackComplexity,
                                                               @RequestParam(name = "attack-vector") Double attackVector,
                                                               @RequestParam Double availability,
                                                               @RequestParam Double confidentiality,
                                                               @RequestParam(name = "exploit-code-maturity") Double exploitCodeMaturity,
                                                               @RequestParam Double integrity,
                                                               @RequestParam(name = "privileges-required") Double privilegesRequired,
                                                               @RequestParam(name = "remediation-level") Double remediationLevel,
                                                               @RequestParam(name = "report-confidence") Double reportConfidence,
                                                               @RequestParam Double scope,
                                                               @RequestParam(name = "user-interaction") Double userInteraction)
    {
        Double result = 0.0;
        try {
            result = fuzzyService.run(attackComplexity, attackVector, availability, confidentiality, exploitCodeMaturity,
                    integrity, privilegesRequired, remediationLevel, reportConfidence, scope, userInteraction);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }


        return new ResponseEntity<Double>(result, HttpStatus.OK);
    }
}
