import "./App.css";
import Application from "./components/Application/Application";
import toolsLogo from "./assets/secure-data-tools-logo.svg";
import itToolsLogo from "./assets/it-tools-logo.svg";
import launchLogo from "./assets/game-launcher-logo.svg";
import logsLogo from "./assets/api-logs-monitor-logo.svg";
import errorsInspectorLogo from "./assets/errors-inspector-logo.svg";
import businessAnalyticsLogo from "./assets/business-analytics-logo.svg";
import mongoLogo from "./assets/mongo-logo.svg";
import portainerLogo from "./assets/portainer-logo.svg";
import developmentLogo from "./assets/development-logo.svg";
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

      <h6 className="separator">
        <img src={applicationsIcon} alt="tools" className="separator-icon" />{" "}
        Applications
      </h6>

      <div className="apps-container">
        <Application
          icon={toolsLogo}
          title="Secure Data Tools"
          path="https://45.128.98.99:12443/"
        />

        <Application
          icon={itToolsLogo}
          title="IT-Tools"
          path="http://45.128.98.99:8080/"
        />

        <Application
          icon={launchLogo}
          title="Game Launcher"
          path="https://45.128.98.99:8443/"
        />

        <Application
          icon={logsLogo}
          title="Logs Monitor"
          path="https://45.128.98.99:10443/"
        />

        <Application
          icon={errorsInspectorLogo}
          title="Errors Inspector"
          path="https://45.128.98.99:13443/"
        />

        <Application
          icon={businessAnalyticsLogo}
          title="Business Analytics"
          path="https://45.128.98.99:14443/"
        />
      </div>

      <h6 className="separator">
        <img src={infrastructureIcon} alt="tools" className="separator-icon" />{" "}
        Infrastructure
      </h6>

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

        <Application
          icon={developmentLogo}
          title="Development"
          path="http://45.128.98.99:5173/"
        />
      </div>
    </div>
  );
}

export default App;
