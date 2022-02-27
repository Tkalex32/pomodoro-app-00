import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
