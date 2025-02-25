import { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the settings
interface Settings {
  theme: string;
  notifications: boolean;
  sound: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
}

// Create the context with a default value
export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

// Create the provider component
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => {
    // Load settings from localStorage or use default values
    const savedSettings = localStorage.getItem("settings");
    return savedSettings ? JSON.parse(savedSettings) : {
      theme: "light",
      notifications: true,
      sound: true,
    };
  });

  useEffect(() => {
    // Save settings to localStorage whenever they change
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const updateSetting: SettingsContextType['updateSetting'] = (key, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}