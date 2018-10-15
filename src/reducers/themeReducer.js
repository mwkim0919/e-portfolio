import { CHANGE_THEME } from "../actions/types";

const initialState = {
  status: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        status: !state.status
      };
    default:
      return state;
  }
};
