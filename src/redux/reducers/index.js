import { combineReducers } from "redux";

import appReducer from "./appReducer";
import notesReducer from "./notesReducer";
import locationReducer from "./locationReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  app: appReducer,
  notes: notesReducer,
  location: locationReducer,
  weather: weatherReducer,
});

export default rootReducer;
