import "./AppLayout.module.scss";

import ActionPanel from "../actionPanel";
import CurrentInfo from "../currentInfo";
import Weather from "../weather";

const AppLayout = () => (
  <div className="wrapper">
    <div style={{ margin: 20 }}>
      {" "}
      <header>
        <ActionPanel />
      </header>{" "}
      <main>
        <div>
          <CurrentInfo />
        </div>
        <div>
          <Weather />
        </div>
      </main>
    </div>
  </div>
);

export default AppLayout;
