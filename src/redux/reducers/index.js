import { combineReducers } from "redux";

import noteReducer from "./noteReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  note: noteReducer,
  weather: weatherReducer,
});
