package com.example.InzenjeringProject.connector;

import com.example.InzenjeringProject.model.AttackDescription;
import com.example.InzenjeringProject.model.Scale;
import ucm.gaia.jcolibri.cbrcore.CBRCase;
import ucm.gaia.jcolibri.cbrcore.CaseBaseFilter;
import ucm.gaia.jcolibri.cbrcore.Connector;
import ucm.gaia.jcolibri.exception.InitializingException;
import ucm.gaia.jcolibri.util.FileIO;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Collection;
import java.util.LinkedList;

public class CsvConnector implements Connector {
	
	@Override
	public Collection<CBRCase> retrieveAllCases() {
		LinkedList<CBRCase> cases = new LinkedList<CBRCase>();
		
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(FileIO.openFile("C:\\8. semestar\\IZ_PROJECT_2021\\InzenjeringProject\\InzenjeringProject\\data\\attacks.csv")));
			if (br == null)
				throw new Exception("Error opening file");

			String line = "";
			while ((line = br.readLine()) != null) {
				if (line.startsWith("#") || (line.length() == 0))
					continue;
				String[] values = line.split(";");

				CBRCase cbrCase = new CBRCase();

				AttackDescription attackDescription = new AttackDescription();

				attackDescription.setAttack(values[0]);
				attackDescription.setLikelihoodOfAttack(Scale.valueOf(values[1]));
				attackDescription.setTypicalSeverity(Scale.valueOf(values[2]));
				attackDescription.setPrerequisites(values[3]);
				attackDescription.setAvailability(values[4]);
				attackDescription.setConfidentiality(values[5]);
				attackDescription.setConfidentialityAccessControlAuthorization(values[6]);
				attackDescription.setMitigations(values[7]);
				
				cbrCase.setDescription(attackDescription);
				cases.add(cbrCase);
			}
			br.close();
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