import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentsOutList from "../../components/StudentsOutList/StudentsOutList";
import { firestore } from "../../libs/Firebase";
import "./Manage.scss";

const Manage = () => {
  const navigate = useNavigate();

  const [dbData, setDbData] = useState<any>([]);

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
    <div className="managewrap">
      <StudentsOutList />
    </div>
  );
};

export default Manage;
