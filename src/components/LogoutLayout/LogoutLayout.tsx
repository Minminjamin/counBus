import { getAuth, signOut } from "firebase/auth";
import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./LogoutLayout.scss";

const LogoutLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const onHandleClickLogout = () => {
    const auth = getAuth();

    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="logoutLayoutWrap">
      <div className="childrenWrap">{children}</div>
      <button onClick={onHandleClickLogout}>Logout</button>
    </div>
  );
};

export default LogoutLayout;
