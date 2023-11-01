import React from "react";
import Warning from "../../components/Warning/Warning";
import "./Dormitory.scss";

const Dormitory = () => {
  return (
    <div className="wrap">
      <Warning>
        <span>사감 선생님 및 담임선생님께</span>
        <span>외출 또는 외박 허가를 받겠습니까?</span>
      </Warning>
    </div>
  );
};

export default Dormitory;
