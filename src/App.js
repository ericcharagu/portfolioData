import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Cover from "./components/cover";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Message from "./components/message";
import Academic from "./components/academic";
import Services from "./components/services"; // NEW
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="App">
        <Analytics />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Cover />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Academic />} /> {/* renamed */}
          <Route path="/contact" element={<Message />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;