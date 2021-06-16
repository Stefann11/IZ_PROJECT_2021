package com.example.InzenjeringProject.cbr;

import com.example.InzenjeringProject.connector.CsvConnector;
import com.example.InzenjeringProject.dto.CBRResultDTO;
import com.example.InzenjeringProject.model.AttackDescription;
import com.example.InzenjeringProject.model.Scale;
import org.springframework.stereotype.Service;
import ucm.gaia.jcolibri.casebase.LinealCaseBase;
import ucm.gaia.jcolibri.cbraplications.StandardCBRApplication;
import ucm.gaia.jcolibri.cbrcore.*;
import ucm.gaia.jcolibri.exception.ExecutionException;
import ucm.gaia.jcolibri.method.retrieve.NNretrieval.NNConfig;
import ucm.gaia.jcolibri.method.retrieve.NNretrieval.NNScoringMethod;
import ucm.gaia.jcolibri.method.retrieve.NNretrieval.similarity.global.Average;
import ucm.gaia.jcolibri.method.retrieve.NNretrieval.similarity.local.EnumDistance;
import ucm.gaia.jcolibri.method.retrieve.NNretrieval.similarity.local.MaxString;
import ucm.gaia.jcolibri.method.retrieve.RetrievalResult;
import ucm.gaia.jcolibri.method.retrieve.selection.SelectCases;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class CbrApplication implements StandardCBRApplication {
	
	Connector _connector;  /** Connector object */
	CBRCaseBase _caseBase;  /** CaseBase object */

	NNConfig simConfig;  /** KNN configuration */
	private static ArrayList<CBRResultDTO> attacks = new ArrayList<CBRResultDTO>();
	
	public void configure() throws ExecutionException {
		_connector =  new CsvConnector();
		
		_caseBase = new LinealCaseBase();  // Create a Lineal case base for in-memory organization
		
		simConfig = new NNConfig(); // KNN configuration
		simConfig.setDescriptionSimFunction(new Average());  // global similarity function = average

		// simConfig.addMapping(new Attribute("price", TransactionDescription.class), new Interval(100));
		simConfig.addMapping(new Attribute("likelihoodOfAttack", AttackDescription.class), new EnumDistance());
		simConfig.addMapping(new Attribute("typicalSeverity", AttackDescription.class), new EnumDistance());
		simConfig.addMapping(new Attribute("prerequisites", AttackDescription.class), new MaxString());
		simConfig.addMapping(new Attribute("availability", AttackDescription.class), new MaxString());
		simConfig.addMapping(new Attribute("confidentiality", AttackDescription.class), new MaxString());
		simConfig.addMapping(new Attribute("confidentialityAccessControlAuthorization", AttackDescription.class), new MaxString());

		// Equal - returns 1 if both individuals are equal, otherwise returns 0
		// Interval - returns the similarity of two number inside an interval: sim(x,y) = 1-(|x-y|/interval)
		// Threshold - returns 1 if the difference between two numbers is less than a threshold, 0 in the other case
		// EqualsStringIgnoreCase - returns 1 if both String are the same despite case letters, 0 in the other case
		// MaxString - returns a similarity value depending of the biggest substring that belong to both strings
		// EnumDistance - returns the similarity of two enum values as the their distance: sim(x,y) = |ord(x) - ord(y)|
		// EnumCyclicDistance - computes the similarity between two enum values as their cyclic distance
		// Table - uses a table to obtain the similarity between two values. Allowed values are Strings or Enums. The table is read from a text file.
		// TableSimilarity(List<String> values).setSimilarity(value1,value2,similarity) 
	}

	public void cycle(CBRQuery query) throws ExecutionException {
		Collection<RetrievalResult> eval = NNScoringMethod.evaluateSimilarity(_caseBase.getCases(), query, simConfig);
		eval = SelectCases.selectTopKRR(eval, 5);
		System.out.println("Retrieved cases:");
		for (RetrievalResult nse : eval){
			//attacks.add(nse.get_case().getDescription() + " -> " + nse.getEval());
			AttackDescription attackDescription = (AttackDescription)nse.get_case().getDescription();
			attacks.add(new CBRResultDTO(attackDescription.getAttack().replace("_", " "),
					attackDescription.getMitigations().replace("_", " "), nse.getEval()));
			System.out.println(nse.get_case().getDescription() + " -> " + nse.getEval());
		}
	}

	public void postCycle() throws ExecutionException {
		
	}

	public CBRCaseBase preCycle() throws ExecutionException {
		_caseBase.init(_connector);
		Collection<CBRCase> cases = _caseBase.getCases();
		for (CBRCase c: cases)
			System.out.println(c.getDescription());
		return _caseBase;
	}

	public List<CBRResultDTO> run(String likelihoodOfAttack, String typicalSeverity, String prerequisites, String availability,
							String confidentiality, String confidentialityAccessControlAuthorization) {
		StandardCBRApplication recommender = new CbrApplication();
		try {
			recommender.configure();

			recommender.preCycle();

			CBRQuery query = new CBRQuery();

			AttackDescription attackDescription = new AttackDescription();
			attackDescription.setLikelihoodOfAttack(Scale.valueOf(likelihoodOfAttack));
			attackDescription.setTypicalSeverity(Scale.valueOf(typicalSeverity));
			attackDescription.setPrerequisites(prerequisites);
			attackDescription.setAvailability(availability);
			attackDescription.setConfidentiality(confidentiality);
			attackDescription.setConfidentialityAccessControlAuthorization(confidentialityAccessControlAuthorization);
			query.setDescription( attackDescription );
			recommender.cycle(query);

			recommender.postCycle();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return  attacks;
	}

}