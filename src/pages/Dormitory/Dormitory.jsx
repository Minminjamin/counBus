import React, { useState, useEffect } from "react";
import Warning from "../../components/Warning/Warning";
import "./Dormitory.scss";
import Bus from "../../components/Bus/Bus";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dormitory = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isBus, setIsBus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const onHandleApplied = () => {
    setIsBus(true);
    setIsOpen(false);
  };

  return (
    <div className="dormitoryWrap">
      {isOpen ? (
        <Warning setIsOpen={setIsOpen}>
          <span>사감 선생님 및 담임선생님께</span>
          <span>외출 또는 외박 허가를 받겠습니까?</span>
          <span onClick={onHandleApplied} className="alreadyApplied">
            이미 외출 외박 신청을 받으셨다면 여기를 클릭해주세요.
          </span>
        </Warning>
      ) : isBus ? (
        <Bus />
      ) : (
        <ApplicationForm setIsBus={setIsBus} />
      )}
    </div>
  );
};

export default Dormitory;
