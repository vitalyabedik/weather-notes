import { combineReducers } from "redux";

import textReducer from "./textReducer";
import notesReducer from "./notesReducer";
import locationReducer from "./locationReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  text: textReducer,
  notes: notesReducer,
  location: locationReducer,
  weather: weatherReducer,
});

export default rootReducer;
