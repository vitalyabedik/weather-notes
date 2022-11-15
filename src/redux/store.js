import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import openWeatherAPI from "../api/openWeatherAPI";
import geocodingAPI from "../api/geocodingAPI";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        openWeatherAPI,
        geocodingAPI,
      })
    )
  )
);
export default store;

// import axios from "axios";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// import rootReducer from "./reducers";
// import { openWeatherAPI, geocodingAPI } from "../config";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(
//       thunk.withExtraArgument({
//         client: axios,
//         openWeatherAPI,
//         geocodingAPI,
//       })
//     )
//   )
// );
// export default store;
