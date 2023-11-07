import React, { useEffect } from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const path: string = process.env.PUBLIC_URL;

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        const userId: string = user.email?.split("@")[0].slice(-1);

        if (userId === "d") {
          navigate("/dormitory");
        } else if (userId === "t" || userId === "m") {
          navigate("/manage");
        } else {
          navigate("/commute");
        }
      } else {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <main>
      <section className="logoImg">
        <img
          src={`${path}/image/main/bus.png`}
          alt="counBus 로고 버스 이미지"
          className="bus"
        />
        <img
          src={`${path}/image/main/load.png`}
          alt="counBus 로고 도로 이미지"
        />
      </section>
      <section className="tag">
        <h1>CounBus</h1>
        <span>이공일(201)</span>
      </section>
    </main>
  );
};

export default Main;
