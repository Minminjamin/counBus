import React, { useState } from "react";
import Warning from "../../components/Warning/Warning";
import "./Dormitory.scss";
import Bus from "../Bus/Bus";

const Dormitory = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="wrap">
      {isOpen ? (
        <Warning setIsOpen={setIsOpen}>
          <span>사감 선생님 및 담임선생님께</span>
          <span>외출 또는 외박 허가를 받겠습니까?</span>
        </Warning>
      ) : (
        <Bus />
      )}
    </div>
  );
};

export default Dormitory;
