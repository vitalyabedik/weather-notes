import * as appActionCreators from "./appAction";
import * as notesActionCreators from "./notesAction";
import * as locationActionCreators from "./locationAction";
import * as weatherActionCreators from "./weatherAction";
import * as thunks from "../thunks";

const allActionCreators = {
  ...appActionCreators,
  ...notesActionCreators,
  ...locationActionCreators,
  ...weatherActionCreators,
  ...thunks,
};

export default allActionCreators;
