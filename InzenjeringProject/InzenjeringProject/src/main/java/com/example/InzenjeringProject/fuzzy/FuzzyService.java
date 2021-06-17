package com.example.InzenjeringProject.fuzzy;

import net.sourceforge.jFuzzyLogic.FIS;
import net.sourceforge.jFuzzyLogic.FunctionBlock;
import net.sourceforge.jFuzzyLogic.plot.JFuzzyChart;
import net.sourceforge.jFuzzyLogic.rule.Variable;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.File;

@Service
public class FuzzyService {

    public Double run(Double attackComplexity, Double attackVector, Double availability, Double confidentiality,
                      Double exploitCodeMaturity, Double integrity, Double privilegesRequired, Double remediationLevel,
                      Double reportConfidence, Double scope, Double userInteraction) throws Exception{

        File file = ResourceUtils.getFile("classpath:SeverityScore.fcl");
        FIS fis = FIS.load(file.getAbsolutePath(),true);

        FunctionBlock functionBlock = fis.getFunctionBlock("attacks");

        // Set inputs
        fis.setVariable("attack_complexity", attackComplexity);
        fis.setVariable("attack_vector", attackVector);
        fis.setVariable("availability", availability);
        fis.setVariable("confidentiality", confidentiality);
        fis.setVariable("exploit_code_maturity", exploitCodeMaturity);
        fis.setVariable("integrity", integrity);
        fis.setVariable("privileges_required", privilegesRequired);
        fis.setVariable("remediation_level", remediationLevel);
        fis.setVariable("report_confidence", reportConfidence);
        fis.setVariable("scope", scope);
        fis.setVariable("user_interaction", userInteraction);

        // Evaluate
        fis.evaluate();

        // Show output variable's chart
        Variable score = functionBlock.getVariable("severity_score");

        return  score.getValue();
    }
}
