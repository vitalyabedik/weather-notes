import { combineReducers } from "redux";

import textReducer from "./textReducer";
import notesReducer from "./notesReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  text: textReducer,
  notes: notesReducer,
  weather: weatherReducer,
});

export default rootReducer;
