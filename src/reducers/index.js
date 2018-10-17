import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import experienceReducer from "./experienceReducer";
import skillsReducer from "./skillsReducer";
import projectsReducer from "./projectsReducer";
import educationReducer from './educationReducer';

export default combineReducers({
  darkTheme: themeReducer,
  experience: experienceReducer,
  skills: skillsReducer,
  education: educationReducer,
  projects: projectsReducer
});
