import * as appActionCreators from "./appAction";
import * as textActionCreators from "./textAction";
import * as notesActionCreators from "./notesAction";
import * as locationActionCreators from "./locationAction";
import * as weatherActionCreators from "./weatherAction";
import * as thunks from "../thunks";

const allActionCreators = {
  ...appActionCreators,
  ...textActionCreators,
  ...notesActionCreators,
  ...locationActionCreators,
  ...weatherActionCreators,
  ...thunks,
};

export default allActionCreators;
