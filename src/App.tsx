import React from "react";
import "./App.scss";
import Commute from "./pages/Commute/Commute";
import Dormitory from "./pages/Dormitory/Dormitory";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import Permission from "./pages/Permission/Permission";
import Manage from "./pages/Manage/Manage";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dormitory" element={<Dormitory />} />
        <Route path="/commute" element={<Commute />} />
        <Route path="/permission" element={<Permission />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </div>
  );
}

export default App;
