import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PuppyGallery from "./components/PuppyGallery";
import SettingsPanel from "./components/pages/Settings";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import { SettingsProvider } from "./context/SettingsContext";

export default function App() {
  return (
    <SettingsProvider>
      <Router basename="/Puppy-Paradise-Puppy-Gallery">
        <Header />
        <Routes>
          <Route path="/" element={<PuppyGallery />} />
          <Route path="/settings" element={<SettingsPanel />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </SettingsProvider>
  );
}
