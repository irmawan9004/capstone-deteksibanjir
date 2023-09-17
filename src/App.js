import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Beranda from "./Pages/Beranda";
import Dashboard from "./Pages/Dashboard";
import Ketinggian from "./Pages/Ketinggian";
import Debit from "./Pages/Debit";
import Kekeruhan from "./Pages/Kekeruhan";

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
      </Routes>
    </Router>
  );
}

export default App;
