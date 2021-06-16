import { GET_CBR, GET_BAYES } from "../types/types";

const initialState = {
  cbr: [],
  bayes: [],
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
    default:
      return state;
  }
}

export default reducer;
