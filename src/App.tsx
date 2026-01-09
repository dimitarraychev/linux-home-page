import "./App.css";
import AppIcon from "./components/AppIcon/AppIcon";
import toolsLogo from "./assets/secure-data-tools-logo.svg";
import launchLogo from "./assets/game-launch-ui-logo.svg";
import logsLogo from "./assets/api-logs-monitor-logo.svg";

function App() {
  return (
    <div className="app">
      <div className="apps-container">
        <AppIcon icon={toolsLogo} title="Secure Data Tools" />
        <AppIcon icon={launchLogo} title="Game Launch UI" />
        <AppIcon icon={logsLogo} title="API Logs Monitor" />
      </div>
    </div>
  );
}

export default App;
