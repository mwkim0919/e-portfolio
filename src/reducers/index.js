import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import experienceReducer from "./experienceReducer";
import skillsReducer from "./skillsReducer";

export default combineReducers({
  darkTheme: themeReducer,
  experience: experienceReducer,
  skills: skillsReducer
});
