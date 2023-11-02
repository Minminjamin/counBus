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
      <img src={`${path}/image/main/logo.png`} alt="counBus 로고 이미지" />
      <article>
        <h1>CounBus</h1>
        <span>이공일(201)</span>
      </article>
    </main>
  );
};

export default Main;
