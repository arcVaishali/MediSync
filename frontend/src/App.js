import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./AppPages/PatientFlow/Home";
import Signup from "../src/AppPages/Signup";
import Login from "../src/AppPages/Login";
import PatientDashboard from "../src/AppPages/PatientDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<PatientDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
