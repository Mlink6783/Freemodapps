import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ModDetail from "./pages/ModDetail";
import AddMod from "./pages/AddMod";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mod/:id" element={<ModDetail />} />
        <Route path="/add" element={<AddMod />} />
      </Routes>
    </Router>
  );
}