import React from "react";
import "./Main.scss";

const path: string = process.env.PUBLIC_URL;

const Main = () => {
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
