import { Provider } from "react-redux";

import "./App.scss";

import store from "../redux/store";
import AppLayout from "../components/layout";

const App = () => (
  <div className="app">
    <Provider store={store}>
      <AppLayout />
    </Provider>
  </div>
);

export default App;
