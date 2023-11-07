import React, { useEffect } from "react";
import Warning from "../../components/Warning/Warning";
import Bus from "../../components/Bus/Bus";
import "./Commute.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/store";

const Commute = () => {
  const isAllow = useSelector((state: ReduxState) => state.isAllow.value);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }

      if (user && user.email?.split("@")[0].slice(-1) === "d") {
        navigate("/dormitory");
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <div className="wrap">
      {!isAllow ? (
        <Warning>
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
