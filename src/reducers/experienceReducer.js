import { FETCH_EXPERIENCE } from "../actions/types";

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCE:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
