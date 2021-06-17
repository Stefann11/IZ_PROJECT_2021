import { GET_CBR, GET_BAYES, GET_SEVERITY_SCORE } from "../types/types";

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
    default:
      return state;
  }
}

export default reducer;
