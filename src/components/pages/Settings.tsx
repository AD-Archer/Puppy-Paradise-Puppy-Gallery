import { useContext, useEffect } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-dark-5/dist/css/bootstrap-dark.min.css";

export default function SettingsPanel() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("SettingsPanel must be used within a SettingsProvider");
  }

  const { settings, updateSetting } = context;

  useEffect(() => {
    // Apply dark mode class to body when theme changes
    if (settings.theme === "dark") {
      document.body.classList.add("bootstrap-dark");
    } else {
      document.body.classList.remove("bootstrap-dark");
    }
  }, [settings.theme]);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Settings</h2>

          <div className="mb-3">
            <label className="form-label">Theme:</label>
            <select className="form-select" value={settings.theme} onChange={(e) => updateSetting("theme", e.target.value)}>
              <option value="light">Light Mode</option>
              <option value="dark">Dark Mode</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}