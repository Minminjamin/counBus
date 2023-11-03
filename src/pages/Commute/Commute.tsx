import React, { useEffect, useState } from "react";
import Warning from "../../components/Warning/Warning";
import Bus from "../../components/Bus/Bus";
import "./Commute.scss";

const Commute = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="wrap">
      {isOpen ? (
        <Warning setIsOpen={setIsOpen}>
          <span>일과 중에 온라인에 접속하셨습니다.</span>
          <span>담임 선생님의 허락을 받으셨습니까?</span>
        </Warning>
      ) : (
        <Bus />
      )}
    </div>
  );
};

export default Commute;
