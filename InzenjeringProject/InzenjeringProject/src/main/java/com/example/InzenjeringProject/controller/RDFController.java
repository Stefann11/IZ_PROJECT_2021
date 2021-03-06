package com.example.InzenjeringProject.controller;

import com.example.InzenjeringProject.dto.RDFAttackDTO;
import com.example.InzenjeringProject.fuzzy.FuzzyService;
import com.example.InzenjeringProject.sparql.RDFService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/rdf")
public class RDFController {

    @Autowired
    private RDFService rdfService;

    @CrossOrigin(origins = "*")
    @PostMapping()
    public ResponseEntity<RDFAttackDTO> insert(@RequestBody RDFAttackDTO dto)
    {
        return new ResponseEntity<RDFAttackDTO>(rdfService.insert(dto), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping()
    public ResponseEntity<List<RDFAttackDTO>> getAll()
    {
        return new ResponseEntity<List<RDFAttackDTO>>(rdfService.getAll(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PutMapping()
    public ResponseEntity<RDFAttackDTO> update(@RequestBody RDFAttackDTO dto)
    {
        return new ResponseEntity<RDFAttackDTO>(rdfService.update(dto), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id)
    {
        rdfService.delete(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }
}
