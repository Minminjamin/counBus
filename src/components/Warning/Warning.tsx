import React, { ReactNode } from "react";
import "./Warning.scss";

const Warning = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrap">
      <section>
        <h2>경고</h2>
        <div className="wraning">{children}</div>

        <div className="btn">
          <span>취소</span>
          <span>계속</span>
        </div>
      </section>
    </div>
  );
};

export default Warning;
