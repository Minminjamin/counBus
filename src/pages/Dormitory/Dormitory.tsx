import React, { useEffect } from "react";
import Warning from "../../components/Warning/Warning";
import "./Dormitory.scss";
import Bus from "../../components/Bus/Bus";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isAllow } from "../../redux/isAllowSlice/isAllowSlice";
import { isApplicate } from "../../redux/isApplicateSlice/isApplicateSlice";
import { ReduxState } from "../../redux/store";

const Dormitory = () => {
  const dispatch = useDispatch();

  const isAllowState = useSelector((state: ReduxState) => state.isAllow.value);
  const isApplicateState = useSelector(
    (state: ReduxState) => state.isApplicate.value
  );

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }

      if (user && user.email) {
        const userId: string = user.email?.split("@")[0].slice(-1);

        if (userId === "t" || userId === "m") {
          navigate("/manage");
        } else {
          navigate("/commute");
        }
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const onHandleApplied = () => {
    dispatch(isAllow());
    dispatch(isApplicate());
  };

  return (
    <div className="dormitoryWrap">
      {!isAllowState ? (
        <Warning>
          <span>사감 선생님 및 담임선생님께</span>
          <span>외출 또는 외박 허가를 받겠습니까?</span>
          <span onClick={onHandleApplied} className="alreadyApplied">
            이미 외출 외박 신청을 받으셨다면 여기를 클릭해주세요.
          </span>
        </Warning>
      ) : isApplicateState ? (
        <Bus />
      ) : (
        <ApplicationForm />
      )}
    </div>
  );
};

export default Dormitory;