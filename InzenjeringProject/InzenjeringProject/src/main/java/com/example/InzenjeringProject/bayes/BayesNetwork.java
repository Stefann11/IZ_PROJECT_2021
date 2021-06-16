package com.example.InzenjeringProject.bayes;

import com.example.InzenjeringProject.dto.BayesResultDTO;
import org.springframework.stereotype.Service;
import unbbayes.io.BaseIO;
import unbbayes.io.NetIO;
import unbbayes.prs.Node;
import unbbayes.prs.bn.JunctionTreeAlgorithm;
import unbbayes.prs.bn.ProbabilisticNetwork;
import unbbayes.prs.bn.ProbabilisticNode;
import unbbayes.util.extension.bn.inference.IInferenceAlgorithm;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BayesNetwork {

	public List<BayesResultDTO> run(int country, int industry, int numberOfEmployees, int os, int typeOfDataLost,
									int securityControl, int itDepartment, int systemAge, int internationalCompany,
									int staticIp) throws Exception {

		ProbabilisticNetwork net = new ProbabilisticNetwork("example");
		 BaseIO io = new NetIO();
		 net = (ProbabilisticNetwork)io.load(new File("C:\\8. semestar\\Inzenjering znanja\\BayesExample\\src\\example\\BayesNetworkJava.net"));

		// compiling
		IInferenceAlgorithm algorithm = new JunctionTreeAlgorithm();
		algorithm.setNetwork(net);
		algorithm.run();
		
		// states overview
		List<Node> nodeList = net.getNodes();
		
		// adding an evidence
		ProbabilisticNode factNode = (ProbabilisticNode)net.getNode("Country");
		int stateIndex = country; // index of state "green"
		factNode.addFinding(stateIndex);

		ProbabilisticNode factNode2 = (ProbabilisticNode)net.getNode("Industry");
		int stateIndex2 = industry; // index of state "green"
		factNode2.addFinding(stateIndex2);

		ProbabilisticNode factNode3 = (ProbabilisticNode)net.getNode("Number_of_employees");
		int stateIndex3 = numberOfEmployees; // index of state "green"
		factNode3.addFinding(stateIndex3);

		ProbabilisticNode factNode4 = (ProbabilisticNode)net.getNode("OS");
		int stateIndex4 = os; // index of state "green"
		factNode4.addFinding(stateIndex4);

		ProbabilisticNode factNode5 = (ProbabilisticNode)net.getNode("Type_of_data_lost_");
		int stateIndex5 = typeOfDataLost; // index of state "green"
		factNode5.addFinding(stateIndex5);

		ProbabilisticNode factNode6 = (ProbabilisticNode)net.getNode("Security_control");
		int stateIndex6 = securityControl; // index of state "green"
		factNode6.addFinding(stateIndex6);

		ProbabilisticNode factNode7 = (ProbabilisticNode)net.getNode("IT_deparment");
		int stateIndex7 = itDepartment; // index of state "green"
		factNode7.addFinding(stateIndex7);

		ProbabilisticNode factNode8 = (ProbabilisticNode)net.getNode("System_age");
		int stateIndex8 = systemAge; // index of state "green"
		factNode8.addFinding(stateIndex8);

		ProbabilisticNode factNode9 = (ProbabilisticNode)net.getNode("International_company");
		int stateIndex9 = internationalCompany; // index of state "green"
		factNode9.addFinding(stateIndex9);

		ProbabilisticNode factNode10 = (ProbabilisticNode)net.getNode("Static_IP");
		int stateIndex10 = staticIp; // index of state "green"
		factNode10.addFinding(stateIndex10);
		
		System.out.println();
		
		// propagation
		try {
        	net.updateEvidences();
        } catch (Exception e) {
        	System.out.println(e.getMessage());               	
        }

		List<ProbabilisticNode> nodeList2 =  nodeList.stream().filter(element->element.getParentNodes().size() == 5).map(element->(ProbabilisticNode)element).collect(Collectors.toList());
		 Collections.sort(nodeList2,
				(o1, o2) -> Float.compare(o2.getMarginalAt(0), o1.getMarginalAt(0)));
		nodeList2 = nodeList2.stream().limit(5).collect(Collectors.toList());
		ArrayList<BayesResultDTO> result = new ArrayList<BayesResultDTO>();
		// states overview after propagation
		for (ProbabilisticNode node : nodeList2) {
			result.add(new BayesResultDTO(node.getName(), node.getMarginalAt(0)));
		}
		// saving to file
		// new NetIO().save(new File("example.net"), net);
		return result;
	}

}