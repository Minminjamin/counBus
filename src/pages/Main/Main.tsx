import React, { useEffect } from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";

const path: string = process.env.PUBLIC_URL;

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
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
