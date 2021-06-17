package com.example.InzenjeringProject.sparql;

import com.example.InzenjeringProject.dto.RDFAttackDTO;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.rdf.model.Literal;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.update.UpdateExecutionFactory;
import org.apache.jena.update.UpdateFactory;
import org.apache.jena.update.UpdateProcessor;
import org.apache.jena.update.UpdateRequest;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.time.LocalDateTime;

@Service
public class RDFService {
    private static final String QUERY_URL = "http://localhost:3030/test/sparql";
    private static final String UPDATE_URL = "http://localhost:3030/test/update";

    public void insert(RDFAttackDTO attack) {
        String insertString = ""
                + "PREFIX attacks: <http://www.ftn.uns.ac.rs/attacks#> "
                + "PREFIX xsd:   <http://w3.org/2001/XMLSchema#> "
                + "INSERT DATA {"
                + "    attacks:" + LocalDateTime.now() + " a attacks:Attack;" +
                "	   attacks:availability \"" + attack.getAvailability() + "\"^^xsd:string;" +
                "	   attacks:confidentiality \"" + attack.getConfidentiality() + "\"^^xsd:string;" +
                "	   attacks:confidentiality_access_control_authorization \"" + attack.getConfidentiality_access_control_authorization() + "\"^^xsd:string;" +
                "	   attacks:likelihood_of_attack \"" + attack.getLikelihood_of_attack() + "\"^^xsd:string;" +
                "	   attacks:mitigations \"asd\"^^xsd:string;" +
                "	   attacks:name \"asd\"^^xsd:string;" +
                "	   attacks:prerequisites \"" + attack.getPrerequisites() + "\"^^xsd:string;" +
                "	   attacks:typical_severity \"" + attack.getTypical_severity() + "\"^^xsd:string;" +
                "}";
        System.out.println(insertString);
        UpdateRequest updateRequest = UpdateFactory.create(insertString);
        UpdateProcessor updateProcessor = UpdateExecutionFactory.createRemote(updateRequest, UPDATE_URL);
        updateProcessor.execute();
    }
}
