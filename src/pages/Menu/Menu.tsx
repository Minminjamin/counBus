import React from "react";
import LogoutLayout from "../../components/LogoutLayout/LogoutLayout";
import "./Menu.scss";

const Menu = () => {
  return (
    <LogoutLayout>
      <div className="btnSet">
        <button>
          외출 · 외박
          <br /> 신청서 작성
        </button>
        <button>버스 시간표</button>
      </div>
    </LogoutLayout>
  );
};

export default Menu;
