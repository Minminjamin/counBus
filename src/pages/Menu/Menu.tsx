import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutLayout from "../../components/LogoutLayout/LogoutLayout";
import "./Menu.scss";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <LogoutLayout>
      <div className="btnSet">
        <button onClick={() => navigate("/application")}>
          외출 · 외박
          <br />
          신청서 작성
        </button>
        <button onClick={() => navigate("/bus")}>버스 시간표</button>
      </div>
    </LogoutLayout>
  );
};

export default Menu;
