import "./App.css";
import Application from "./components/Application/Application";
import toolsLogo from "./assets/secure-data-tools-logo.svg";
import launchLogo from "./assets/game-launch-ui-logo.svg";
import logsLogo from "./assets/api-logs-monitor-logo.svg";
import errorsInspectorLogo from "./assets/errors-inspector-logo.svg";
import businessAnalyticsLogo from "./assets/business-analytics-logo.svg";
import mongoLogo from "./assets/mongo-logo.svg";
import portainerLogo from "./assets/portainer-logo.svg";
import background from "./assets/background.jpg";
import applicationsIcon from "./assets/applications-icon.svg";
import infrastructureIcon from "./assets/infrastructure-icon.svg";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <h1 className="title">Welcome to Homepage!</h1>
      <p className="subtitle">Select an app below to start.</p>

      <h5 className="separator">
        <img src={applicationsIcon} alt="tools" className="separator-icon" />{" "}
        Applications
      </h5>

      <div className="apps-container">
        <Application
          icon={toolsLogo}
          title="Secure Data Tools"
          path="http://45.128.98.99:8082/"
        />

        <Application
          icon={launchLogo}
          title="Game Launcher"
          path="http://45.128.98.99:8084/"
        />

        <Application
          icon={logsLogo}
          title="Logs Monitor"
          path="http://45.128.98.99:8085/"
        />

        <Application
          icon={errorsInspectorLogo}
          title="Errors Inspector"
          path="http://45.128.98.99:8086/"
        />

        <Application
          icon={businessAnalyticsLogo}
          title="Business Analytics"
          path="http://45.128.98.99:8087/"
        />
      </div>

      <h5 className="separator">
        <img src={infrastructureIcon} alt="tools" className="separator-icon" />{" "}
        Infrastructure
      </h5>

      <div className="apps-container">
        <Application
          icon={portainerLogo}
          title="Portainer"
          path="https://45.128.98.99:9443/"
        />

        <Application
          icon={mongoLogo}
          title="Mongo Express"
          path="http://45.128.98.99:8083/"
        />
      </div>
    </div>
  );
}

export default App;
