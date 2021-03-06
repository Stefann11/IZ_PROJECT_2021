import {
  GET_CBR,
  GET_BAYES,
  GET_SEVERITY_SCORE,
  CREATE_ATTACK,
  GET_ATTACKS,
  DELETE_ATTACK,
  EDIT_ATTACK,
} from "../types/types";

const initialState = {
  cbr: [],
  bayes: [],
  severityScore: 0,
  attacks: [],
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
        attacks: state.attacks.concat(action.payload),
      };
    case GET_ATTACKS:
      return {
        ...state,
        attacks: action.payload,
      };
    case DELETE_ATTACK:
      return {
        ...state,
      };
    case EDIT_ATTACK:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default reducer;
