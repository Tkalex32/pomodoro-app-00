import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Navigation from "./components/Navigation/Navigation";
import { SettingsProvider } from "./context/SettingsContext";
import "./App.css";

function App() {
  return (
    <Router>
      <SettingsProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </SettingsProvider>
    </Router>
  );
}

export default App;
