import "./AppLayout.module.scss";

import ActionPanel from "../actionPanel";
import Weather from "../weather";

const AppLayout = () => (
  <div className="wrapper">
    <header>
      <ActionPanel />
    </header>
    <main style={{ marginTop: 100 }}>
      <Weather />
    </main>
  </div>
);

export default AppLayout;
