import {
  GET_CBR,
  GET_BAYES,
  GET_SEVERITY_SCORE,
  CREATE_ATTACK,
} from "../types/types";

const initialState = {
  cbr: [],
  bayes: [],
  severityScore: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CBR:
      return {
        ...state,
        cbr: action.payload,
      };
    case GET_BAYES:
      return {
        ...state,
        bayes: action.payload,
      };
    case GET_SEVERITY_SCORE:
      return {
        ...state,
        severityScore: action.payload,
      };
    case CREATE_ATTACK:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;
