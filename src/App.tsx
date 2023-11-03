import React, { useEffect } from "react";
import "./App.scss";
import Commute from "./pages/Commute/Commute";
import Dormitory from "./pages/Dormitory/Dormitory";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dormitory" element={<Dormitory />} />
        <Route path="/commute" element={<Commute />} />
      </Routes>
    </div>
  );
}

export default App;
