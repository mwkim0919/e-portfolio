import { FETCH_PROJECTS } from "../actions/types";

const initialState = {
  items: {
    academicProjects: [],
    personalProjects: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};
