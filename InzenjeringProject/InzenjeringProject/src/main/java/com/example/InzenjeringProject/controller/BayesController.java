package com.example.InzenjeringProject.controller;

import com.example.InzenjeringProject.bayes.BayesNetwork;
import com.example.InzenjeringProject.cbr.CbrApplication;
import com.example.InzenjeringProject.dto.BayesResultDTO;
import com.example.InzenjeringProject.dto.CBRResultDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api/bayes")
public class BayesController {

    @Autowired
    private BayesNetwork bayesNetwork;

    @CrossOrigin(origins = "*")
    @GetMapping()
    public ResponseEntity<List<BayesResultDTO>> getAppointment(@RequestParam Integer country,
                                                               @RequestParam Integer industry,
                                                               @RequestParam(name = "number-of-employees") Integer numberOfEmployees,
                                                               @RequestParam Integer os,
                                                               @RequestParam(name = "type-of-data-lost") Integer typeOfDataLost,
                                                               @RequestParam(name = "security-control") Integer securityControl,
                                                               @RequestParam(name = "it-department") Integer itDepartment,
                                                               @RequestParam(name = "system-age") Integer systemAge,
                                                               @RequestParam(name = "international-company") Integer internationalCompany,
                                                               @RequestParam(name = "static-ip") Integer staticIp)
    {
        List<BayesResultDTO> result = new ArrayList<>();
        try {
            result = bayesNetwork.run(country, industry, numberOfEmployees, os,
                    typeOfDataLost, securityControl, itDepartment, systemAge, internationalCompany, staticIp);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.OK);
        }


        return new ResponseEntity<List<BayesResultDTO>>(result, HttpStatus.OK);
    }
}
