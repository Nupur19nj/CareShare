import React from "react";
import { Routes, Route, BrowserRouter, Form } from "react-router-dom";
import Home from "./Pages/Home";
import Food from "./Pages/Food";
import Books from "./Pages/Books";
import Clothing from "./Pages/Clothing";
import Ngo from "./Pages/Ngo";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Food" element={<Food/>}/>
          <Route path="/Books" element={<Books />}/>
          <Route path="/Clothing`" element={<Clothing/>}/>
          <Route path="/Ngo" element={<Ngo/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
