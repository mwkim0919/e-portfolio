import { FETCH_SKILLS } from "../actions/types";

const initialState = {
  item: {
    programLanguages: [],
    tools: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SKILLS:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};