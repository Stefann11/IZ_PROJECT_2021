import {
  GET_CBR,
  GET_CBR_ERROR,
  GET_BAYES,
  GET_BAYES_ERROR,
  GET_SEVERITY_SCORE,
  GET_SEVERITY_SCORE_ERROR,
} from "../types/types";
import axios from "axios";

export const getCbr = (parameters) => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8081/api/cbrattacks?", {
      params: {
        "likelihood-of-attack": parameters.likelihoodOfAttack,
        "typical-severity": parameters.typicalSeverity,
        prerequisites: parameters.prerequisites,
        availability: parameters.availability,
        confidentiality: parameters.confidentiality,
        "confidentiality-access-control-authorization":
          parameters.confidentialityAccessControlAuthorization,
      },
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    debugger;
    dispatch({
      type: GET_CBR,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_CBR_ERROR,
      payload: console.log(e),
    });
  }
};

export const getBayes = (parameters) => async (dispatch) => {
  debugger;
  try {
    const response = await axios.get("http://localhost:8081/api/bayes?", {
      params: {
        country: parameters.country,
        industry: parameters.industry,
        "number-of-employees": parameters.numberOfEmployees,
        os: parameters.os,
        "type-of-data-lost": parameters.typeOfDataLost,
        "security-control": parameters.securityControl,
        "it-department": parameters.itDepartment,
        "system-age": parameters.systemAge,
        "international-company": parameters.internationalCompany,
        "static-ip": parameters.staticIp,
      },
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    debugger;
    dispatch({
      type: GET_BAYES,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_BAYES_ERROR,
      payload: console.log(e),
    });
  }
};

export const getSeverityScore = (parameters) => async (dispatch) => {
  debugger;
  try {
    const response = await axios.get("http://localhost:8081/api/fuzzy?", {
      params: {
        "attack-complexity": parameters.attackComplexity,
        "attack-vector": parameters.attackVector,
        availability: parameters.availability,
        confidentiality: parameters.confidentiality,
        "exploit-code-maturity": parameters.exploitCodeMaturity,
        integrity: parameters.integrity,
        "privileges-required": parameters.privilegesRequired,
        "remediation-level": parameters.remediationLevel,
        "report-confidence": parameters.reportConfidence,
        scope: parameters.scope,
        "user-interaction": parameters.userInteraction,
      },
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    debugger;
    dispatch({
      type: GET_SEVERITY_SCORE,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SEVERITY_SCORE_ERROR,
      payload: console.log(e),
    });
  }
};
