import "./App.scss";

import Weather from "../components/weather";
import ActionPanel from "../components/actionPanel";

const App = () => (
  <div className="wrapper">
    <ActionPanel />
    <Weather />
  </div>
);

export default App;
