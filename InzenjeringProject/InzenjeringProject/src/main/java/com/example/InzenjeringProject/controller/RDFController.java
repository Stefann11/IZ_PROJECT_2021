package com.example.InzenjeringProject.controller;

import com.example.InzenjeringProject.dto.RDFAttackDTO;
import com.example.InzenjeringProject.fuzzy.FuzzyService;
import com.example.InzenjeringProject.sparql.RDFService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/rdf")
public class RDFController {

    @Autowired
    private RDFService rdfService;

    @CrossOrigin(origins = "*")
    @PostMapping()
    public ResponseEntity<Void> insert(@RequestBody RDFAttackDTO dto)
    {
        rdfService.insert(dto);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
