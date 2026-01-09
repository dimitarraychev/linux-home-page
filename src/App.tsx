import "./App.css";
import AppIcon from "./components/AppIcon/AppIcon";
import toolsLogo from "./assets/secure-data-tools-logo.svg";
import launchLogo from "./assets/game-launch-ui-logo.svg";
import logsLogo from "./assets/api-logs-monitor-logo.svg";
import ApiStatus from "./components/ApiStatus/ApiStatus";

function App() {
  return (
    <div className="app">
      <h1 className="title">Welcome to the Company Apps Dashboard!</h1>
      <p className="subtitle">Select an app below to get started.</p>

      <div className="apps-container">
        <AppIcon
          icon={toolsLogo}
          title="Secure Data Tools"
          path="/secure-data-tools"
        />
        <AppIcon
          icon={launchLogo}
          title="Game Launch UI"
          path="/game-launch-ui"
        />
        <AppIcon
          icon={logsLogo}
          title="API Logs Monitor"
          path="/api-logs-monitor"
        />
      </div>

      <ApiStatus />
    </div>
  );
}

export default App;
