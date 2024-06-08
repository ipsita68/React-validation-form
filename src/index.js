import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./App"; // Ensure this matches the exact file name and case
import Success from "./Success"; // Ensure the Success.js file exists

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
