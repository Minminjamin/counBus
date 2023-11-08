import React from "react";
import "./App.scss";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import Permission from "./pages/Permission/Permission";
import Manage from "./pages/Manage/Manage";
import Menu from "./pages/Menu/Menu";
import Bus from "./pages/Bus/Bus";
import ApplicationForm from "./pages/ApplicationForm/ApplicationForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/permission" element={<Permission />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </div>
  );
}

export default App;
