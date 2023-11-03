import React, { useRef } from "react";
import "./ApplicationForm.scss";
import emailjs from "@emailjs/browser";

const ApplicationForm = ({
  setIsBus,
}: {
  setIsBus: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const form = useRef<HTMLFormElement>(null);

  const onHandleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          () => {
            setIsBus(true);
            // console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <form onSubmit={onHandleEmailSubmit} ref={form}>
      <h1>외출 · 외박 신청서 </h1>

      <div className="inputForm">
        <label>이름</label>
        <input type="text" placeholder="내 답변" name="from_name" />
      </div>

      <div className="inputForm">
        <label>외출, 외박</label>
        <input type="text" placeholder="내 답변" name="type" />
      </div>

      <div className="inputForm">
        <label>출사 일시</label>
        <input type="date" placeholder="내 답변" name="out_time" />
      </div>

      <div className="inputForm">
        <label>귀사 일시</label>
        <input type="date" placeholder="내 답변" name="come_time" />
      </div>

      <div className="inputForm">
        <label>상세 사유</label>
        <input type="text" placeholder="내 답변" name="reason" />
      </div>

      <div className="inputForm">
        <label>장소</label>
        <input type="text" placeholder="내 답변" name="place" />
      </div>

      <div className="inputForm">
        <label>증빙 서류</label>
        <input type="text" placeholder="내 답변" name="document" />
      </div>

      <div className="inputForm">
        <label>자택 주소 및 전화 번호</label>
        <input type="text" placeholder="내 답변" name="home_address" />
      </div>

      <div className="inputForm">
        <label>보호자 HP</label>
        <input type="text" placeholder="내 답변" name="parents_phone" />
      </div>

      <div className="btn">
        <button>수정</button>
        <button type="submit">제출</button>
      </div>
    </form>
  );
};

export default ApplicationForm;
