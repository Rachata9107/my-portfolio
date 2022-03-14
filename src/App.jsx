import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navtab from "./components/Navtab";
import Footer from "./components/Footer";

import Home from "./page/Home";
import Experience from "./page/Experience";
import Education from "./page/Education";
import Skills from "./page/Skills";
import Project from "./page/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"/profile"}>
        <Navtab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
