import React from "react";
import Warning from "../../components/Warning/Warning";
import "./Commute.scss";

const Commute = () => {
  return (
    <div className="wrap">
      <Warning>
        <span>일과 중에 온라인에 접속하셨습니다.</span>
        <span>담임 선생님의 허락을 받으셨습니까?</span>
      </Warning>
    </div>
  );
};

export default Commute;
