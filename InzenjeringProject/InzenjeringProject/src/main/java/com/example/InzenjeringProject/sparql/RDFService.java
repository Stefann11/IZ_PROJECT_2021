package com.example.InzenjeringProject.sparql;

import com.example.InzenjeringProject.dto.RDFAttackDTO;
import org.apache.jena.query.*;
import org.apache.jena.rdf.model.Literal;
import org.apache.jena.rdf.model.Resource;
import org.apache.jena.update.UpdateExecutionFactory;
import org.apache.jena.update.UpdateFactory;
import org.apache.jena.update.UpdateProcessor;
import org.apache.jena.update.UpdateRequest;
import org.apache.jena.vocabulary.RDF;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class RDFService {
    private static final String QUERY_URL = "http://localhost:3030/test/sparql";
    private static final String UPDATE_URL = "http://localhost:3030/test/update";

    public RDFAttackDTO insert(RDFAttackDTO attack) {
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
        return  attack;
    }

    public ArrayList<RDFAttackDTO> getAll() {
        ArrayList<RDFAttackDTO> result = new ArrayList<>();
        String queryString = "PREFIX attacks: <http://www.ftn.uns.ac.rs/attacks#> \n" +
                "\n" +
                "SELECT  ?attacks ?availability ?confidentiality ?confidentiality_access_control_authorization\n" +
                "?likelihood_of_attack ?mitigations ?name ?prerequisites ?typical_severity\n" +
                "WHERE\n" +
                "  { ?attacks a attacks:Attack;\n" +
                "    \tattacks:availability ?availability;\n" +
                "     \tattacks:confidentiality ?confidentiality;\n" +
                "      \tattacks:confidentiality_access_control_authorization ?confidentiality_access_control_authorization;\n" +
                "       \tattacks:likelihood_of_attack ?likelihood_of_attack;\n" +
                "        attacks:mitigations ?mitigations;\n" +
                "        attacks:name ?name;\n" +
                "\t\tattacks:prerequisites ?prerequisites;\n" +
                "  \t\tattacks:typical_severity ?typical_severity.}";
        Query query = QueryFactory.create(queryString) ;
        try {
            QueryExecution qexec = QueryExecutionFactory.sparqlService(QUERY_URL, query);

            ResultSet results = qexec.execSelect() ;
            while (results.hasNext()) {
                QuerySolution solution = results.nextSolution() ;
                Resource attack = solution.getResource("attacks");
                Literal availability = solution.getLiteral("availability");
                Literal confidentiality = solution.getLiteral("confidentiality");
                Literal confidentiality_access_control_authorization = solution.getLiteral("confidentiality_access_control_authorization");
                Literal likelihood_of_attack = solution.getLiteral("likelihood_of_attack");
                Literal mitigations = solution.getLiteral("mitigations");
                Literal name = solution.getLiteral("name");
                Literal prerequisites = solution.getLiteral("prerequisites");
                Literal typical_severity = solution.getLiteral("typical_severity");
                result.add(new RDFAttackDTO(attack.getLocalName(), availability.getString(),
                        confidentiality.getString(), confidentiality_access_control_authorization.getString(),
                        likelihood_of_attack.getString(), mitigations.getString(),
                        name.getString(), prerequisites.getString(), typical_severity.getString()));
            }
            return  result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return  result;
    }

    public RDFAttackDTO delete(RDFAttackDTO attack) {
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
        return  attack;
    }

    public RDFAttackDTO update(RDFAttackDTO attack) {
        String insertString = ""
                + "PREFIX attacks: <http://www.ftn.uns.ac.rs/attacks#> "
                + "PREFIX xsd:   <http://w3.org/2001/XMLSchema#> "
                + "DELETE { attacks:" + attack.getAttack() + " ?x ?y .} "
                + "INSERT  {"
                + "    attacks:" + attack.getAttack() + " a attacks:Attack;" +
                "	   attacks:availability \"" + attack.getAvailability() + "\"^^xsd:string;" +
                "	   attacks:confidentiality \"" + attack.getConfidentiality() + "\"^^xsd:string;" +
                "	   attacks:confidentiality_access_control_authorization \"" + attack.getConfidentiality_access_control_authorization() + "\"^^xsd:string;" +
                "	   attacks:likelihood_of_attack \"" + attack.getLikelihood_of_attack() + "\"^^xsd:string;" +
                "	   attacks:mitigations \"asd\"^^xsd:string;" +
                "	   attacks:name \"asd\"^^xsd:string;" +
                "	   attacks:prerequisites \"" + attack.getPrerequisites() + "\"^^xsd:string;" +
                "	   attacks:typical_severity \"" + attack.getTypical_severity() + "\"^^xsd:string;" +
                "}"
                + "WHERE {"
                + "    attacks:" + attack.getAttack() + " ?x ?y ."
                + "}";
        System.out.println(insertString);
        UpdateRequest updateRequest = UpdateFactory.create(insertString);
        UpdateProcessor updateProcessor = UpdateExecutionFactory.createRemote(updateRequest, UPDATE_URL);
        updateProcessor.execute();
        return  attack;
    }
}
