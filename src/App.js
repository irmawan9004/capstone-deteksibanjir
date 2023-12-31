import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Beranda from "./Pages/Beranda";
import Dashboard from "./Pages/Dashboard";
import Ketinggian from "./Pages/Ketinggian";
import Debit from "./Pages/Debit";
import Kekeruhan from "./Pages/Kekeruhan";

import Cards from "./Components/Card";
import GantiPassword from "./Pages/GantiPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ketinggianair" element={<Ketinggian />} />
        <Route path="/debitair" element={<Debit />} />
        <Route path="/kekeruhanair" element={<Kekeruhan />} />
        <Route path="/evakuasi" element={<Kekeruhan />} />
        <Route path="/forgot-password/:token" element={<GantiPassword />} />
        <Route path="/coba" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;
