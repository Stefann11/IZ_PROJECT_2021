package com.example.InzenjeringProject.connector;

import com.example.InzenjeringProject.dto.RDFAttackDTO;
import com.example.InzenjeringProject.model.AttackDescription;
import com.example.InzenjeringProject.model.Scale;
import org.apache.jena.query.*;
import ucm.gaia.jcolibri.cbrcore.CBRCase;
import ucm.gaia.jcolibri.cbrcore.CaseBaseFilter;
import ucm.gaia.jcolibri.cbrcore.Connector;
import ucm.gaia.jcolibri.exception.InitializingException;

import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedList;


public class CsvConnector implements Connector {

	private static final String QUERY_URL = "http://localhost:3030/inzenjering-znanja/sparql";

	@Override
	public Collection<CBRCase> retrieveAllCases() {
		LinkedList<CBRCase> cases = new LinkedList<CBRCase>();

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
			System.setProperty("http.maxConnections", "10000");
			QueryExecution qexec = QueryExecutionFactory.sparqlService(QUERY_URL, query);

			ResultSet results = qexec.execSelect() ;

			while (results.hasNext()) {
				AttackDescription attackDescription = new AttackDescription();
				CBRCase cbrCase = new CBRCase();
				QuerySolution solution = results.nextSolution() ;
				String attack = solution.getResource("attacks").toString();
				attackDescription.setAttack(attack.substring(33, attack.length()));
				String likelihood_of_attack = solution.getLiteral("likelihood_of_attack").toString();
				attackDescription.setLikelihoodOfAttack(Scale.valueOf(likelihood_of_attack.substring(0, likelihood_of_attack.length()-37)));
				String typical_severity = solution.getLiteral("typical_severity").toString();
				attackDescription.setTypicalSeverity(Scale.valueOf(typical_severity.substring(0, typical_severity.length()-37)));
				String availability = solution.getLiteral("availability").toString();
				attackDescription.setAvailability(availability.substring(0, availability.length()-37));
				String confidentiality = solution.getLiteral("confidentiality").toString();
				attackDescription.setConfidentiality(confidentiality.substring(0, confidentiality.length()-37));
				String confidentiality_access_control_authorization = solution.getLiteral("confidentiality_access_control_authorization").toString();
				attackDescription.setConfidentialityAccessControlAuthorization(confidentiality_access_control_authorization.substring(0, confidentiality_access_control_authorization.length()-37));
				String mitigations = solution.getLiteral("mitigations").toString();
				attackDescription.setMitigations(mitigations.substring(0, mitigations.length()-37));
				String name = solution.getLiteral("name").toString();
				attackDescription.setName(name.substring(0, name.length()-37));
				String prerequisites = solution.getLiteral("prerequisites").toString();
				attackDescription.setPrerequisites(prerequisites.substring(0, prerequisites.length()-37));
				cbrCase.setDescription(attackDescription);
				cases.add(cbrCase);
			}
			return cases;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return cases;
	}

	@Override
	public Collection<CBRCase> retrieveSomeCases(CaseBaseFilter arg0) {
		return null;
	}

	@Override
	public void storeCases(Collection<CBRCase> arg0) {
	}
	
	@Override
	public void close() {
	}

	@Override
	public void deleteCases(Collection<CBRCase> arg0) {
	}

	@Override
	public void initFromXMLfile(URL arg0) throws InitializingException {
	}

}