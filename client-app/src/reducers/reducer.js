import { GET_CBR } from "../types/types";

const initialState = {
  cbr: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CBR:
      return {
        ...state,
        cbr: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
