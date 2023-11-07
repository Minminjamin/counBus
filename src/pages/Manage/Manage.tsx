import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Manage = () => {
  const navigate = useNavigate();

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
    <div>
      <h1>manage page</h1>
    </div>
  );
};

export default Manage;
