import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="wrap">
      <input placeholder="id" />
      <input placeholder="password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
