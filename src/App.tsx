import React from "react";
import "./App.scss";
import Bus from "./pages/Bus/Bus";
import Commute from "./pages/Commute/Commute";
import Dormitory from "./pages/Dormitory/Dormitory";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      {/* <Login /> */}
      {/* <Commute /> */}
      {/* <Dormitory /> */}
      <Bus />
    </div>
  );
}

export default App;
