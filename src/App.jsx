import "./App.css";
import CardsGrid from "./components/CardsGrid";
import Sidebar from "./components/sidebar/Sidebar";
import { createContext, useState } from "react";
import { data as demoData } from "../data/demo_data";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Analysis from "@/pages/Analysis";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
