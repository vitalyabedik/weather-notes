import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";
import openWeatherAPI from "../api/openWeatherAPI";
import geocodingAPI from "../api/geocodingAPI";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["app"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        openWeatherAPI,
        geocodingAPI,
      })
    )
  )
);

export { store };
export const persistor = persistStore(store);
