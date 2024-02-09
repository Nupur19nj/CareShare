import React from "react";
import { Routes, Route, BrowserRouter, Form } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* /* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
