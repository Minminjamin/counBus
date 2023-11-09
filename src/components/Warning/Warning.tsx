import React, { ReactNode } from "react";
import "./Warning.scss";
import { useNavigate } from "react-router-dom";

const Warning = ({ children }: { children: ReactNode }) => {
  const navitage = useNavigate();

  return (
    <div className="wraningWrap">
      <section>
        <h2>경고</h2>
        <div className="wraning">{children}</div>

        <div className="btn">
          <span onClick={() => navitage("/permission")}>취소</span>
          <span>계속</span>
        </div>
      </section>
    </div>
  );
};

export default Warning;
