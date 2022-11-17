import { combineReducers } from "redux";

import textReducer from "./textReducer";
import notesReducer from "./notesReducer";
import locationReducer from "./locationReducer";
import weatherReducer from "./weatherReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  text: textReducer,
  notes: notesReducer,
  location: locationReducer,
  weather: weatherReducer,
  alert: alertReducer,
});

export default rootReducer;
