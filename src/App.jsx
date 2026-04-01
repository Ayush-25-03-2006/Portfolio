import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </>
  );
}

export default App;
