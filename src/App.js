import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Cover from "./components/cover";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Message from "./components/message";
import Portfolio from "./components/portfolio";
import IFrame from "./components/nb";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Cover />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notebook" element={<IFrame />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
