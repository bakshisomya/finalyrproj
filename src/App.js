import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home";
import Dashboard from './Components/Dashboard/Dashboard'
import Filteredshops from './Components/Filteredshops/Filteredshops'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/:shoptype" element={<Filteredshops/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
