import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutLayout from "../../components/LogoutLayout/LogoutLayout";
import "./Menu.scss";

const Menu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        const userId: string = user.email?.split("@")[0].slice(-1);

        if (userId === "t" || userId === "m") {
          navigate("/manage");
        } else {
          return null;
        }
      } else {
        return null;
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

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
