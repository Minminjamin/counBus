import React from "react";
import "./ApplicationForm.scss";

const ApplicationForm = () => {
  return (
    <form>
      <h1>외출 · 외박 신청서 </h1>

      <div className="inputForm">
        <label>이름</label>
        <input type="text" placeholder="내 답변" />
      </div>

      <div className="inputForm">
        <label>출사 일시</label>
        <input type="date" placeholder="내 답변" />
      </div>

      <div className="inputForm">
        <label>귀사 일시</label>
        <input type="date" placeholder="내 답변" />
      </div>

      <div className="inputForm">
        <label>상세 사유</label>
        <input type="text" placeholder="내 답변" />
      </div>

      <div className="inputForm">
        <label>장소</label>
        <input type="text" placeholder="내 답변" />
      </div>

      <div className="inputForm">
        <label>증빙 서류</label>
        <input type="text" placeholder="내 답변" />
      </div>

      <div className="inputForm">
        <label>자택 주소 및 전화 번호</label>
        <input type="text" placeholder="내 답변" />
      </div>

      <div className="inputForm">
        <label>보호자 HP</label>
        <input type="text" placeholder="내 답변" />
      </div>

      <div className="btn">
        <button>수정</button>
        <button>제출</button>
      </div>
    </form>
  );
};

export default ApplicationForm;
