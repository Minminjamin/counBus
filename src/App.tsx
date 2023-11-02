import React, { useEffect } from "react";
import "./App.scss";
import ApplicationForm from "./pages/ApplicationForm/ApplicationForm";
import Bus from "./pages/Bus/Bus";
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
        <Route path="/bus" element={<Bus />} />
      </Routes>

      {/* <Login /> */}
      {/* <Commute /> */}
      {/* <Dormitory /> */}
      {/* <Bus /> */}
      {/* <ApplicationForm /> */}
    </div>
  );
}

export default App;
