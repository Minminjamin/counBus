import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Download from "../../components/Download/Download";
import LogoutLayout from "../../components/LogoutLayout/LogoutLayout";
import StudentsOutList from "../../components/StudentsOutList/StudentsOutList";
import { firestore } from "../../libs/Firebase";
import "./Manage.scss";

const Manage = () => {
  const navigate = useNavigate();

  const [isDown, setIsDown] = useState<boolean>(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }

      if (user && user.email) {
        const userId: string = user.email?.split("@")[0].slice(-1);

        if (userId === "d") {
          navigate("/dormitory");
        } else if (userId === "c") {
          navigate("/commute");
        }
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <LogoutLayout>
      {!isDown ? <StudentsOutList setIsDown={setIsDown} /> : <Download />}
    </LogoutLayout>
  );
};

export default Manage;
