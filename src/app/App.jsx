import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./App.scss";

import { store, persistor } from "../redux/store";
import AppLayout from "../components/Layout";

const App = () => (
  <div className="app">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  </div>
);

export default App;
