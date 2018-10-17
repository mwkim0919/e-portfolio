import { FETCH_EDUCATION } from "../actions/types";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDUCATION:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};