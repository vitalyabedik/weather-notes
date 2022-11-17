import * as textActionCreators from "./textAction";
import * as notesActionCreators from "./notesAction";
import * as locationActionCreators from "./locationAction";
import * as weatherActionCreators from "./weatherAction";
import * as alertActionCreators from "./alertAction";
import * as thunks from "../thunks";

const allActionCreators = {
  ...textActionCreators,
  ...notesActionCreators,
  ...locationActionCreators,
  ...weatherActionCreators,
  ...alertActionCreators,
  ...thunks,
};

export default allActionCreators;
